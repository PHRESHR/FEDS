import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import path from 'path';
import jspm from 'jspm';
import systemjsBuilder from 'systemjs-builder';
import atCSS from 'postcss-import';
import sync from 'run-sequence';
import serve from 'browser-sync';
import modRewrite from 'connect-modrewrite';
import fs from 'fs';
import del from 'del';
import yargs from 'yargs';

const $ = gulpLoadPlugins();
const reload = ()=> serve.reload();
const root = 'client';

// helper method for resolving paths
const resolveToApp = (glob) => {
  glob = glob || '';
  return path.join(root, 'app', glob); // app/{glob}
};

const resolveToComponents = (glob) => {
  glob = glob || '';
  return path.join(root, 'app/components', glob); // app/components/{glob}
};

// map of all paths
const paths = {
  js: resolveToComponents('**/*!(.spec.js).js'), // exclude spec files
  css: resolveToApp('**/*.css'), // stylesheets
  html: [
    resolveToApp('**/*.html'),
    path.join(root, 'index.html')
  ],
  static: path.join(root, 'static/**/*'),
  entry: path.join(root, 'app/bootstrap.js'),
  blankTemplates: path.join(__dirname, 'generator', 'component/**/*.**'),
  dist: path.join(__dirname, 'dist/')
};
// Clean
gulp.task('clean', done => del([paths.dist], {dot: true}, done));

// Style tasks
let styleTask = (stylesPath, srcs) => {
  const processors = [
		atCSS({
			from: 'client/app/styles/*.css'
		})
  ];
  return gulp.src(srcs.map((src) => {
      return path.join(root + '/app', stylesPath, src);
    }))
    .pipe($.newer(stylesPath, {extension: '.css'}))
		.pipe($.sourcemaps.init())
    .pipe($.postcss(processors).on('error', console.error.bind(console)))
		.pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest(root + '/app/layout'));
};

// Compile and Automatically Prefix Stylesheets
gulp.task('styles', () => {
  return styleTask('styles', ['app.css']);
});

gulp.task('static', () => {
	// Optimize Images
  return gulp.src(paths.static)
		.pipe(gulp.dest(paths.dist));
});

// Lint JavaScript
gulp.task('lint', () => {
  return gulp.src([paths.js,
    '!**/*.spec.js'
  ])
  // .pipe(reload({stream: true, once: true}))
  .pipe($.eslint())
  .pipe($.eslint.format())
  .on('error', (e) => {
    const basePath = path.join(__dirname, root);
    const filename = e.fileName.substr(basePath.length + 1);
  });
});

gulp.task('build', gulp.series('clean',  function building() {
  const dist = path.join(paths.dist + 'app.js');

  const Builder = systemjsBuilder;
	const builder = new Builder({
    baseURL: 'client',
  });
	builder.reset();
  builder.loadConfig("./jspm.config.js")
    .then(() => {
      return jspm.bundleSFX(resolveToApp('app.bootstrap'), dist, {minify: true, mangle: false, sourceMaps: true})
      .then(()=> {
        // Also create a fully annotated minified copy
        return gulp.src(dist)
        // .pipe($.ngAnnotate())
        // .pipe($.uglify())
        .pipe($.rename('app.min.js'))
        .pipe(gulp.dest(paths.dist))
      })
      .then(()=> {
        // Inject minified script into index
        return gulp.src('client/index.html')
        .pipe($.htmlReplace({
          'js': 'app.min.js'
        }))
        .pipe(gulp.dest(paths.dist));
      });
    })
}));

// Browser-sync
gulp.task('serve', () => {
  serve({
    port: process.env.PORT || 3000,
    open: false,
    files: [].concat(
      [paths.js],
      [paths.css],
      paths.html
    ),
    server: {
      baseDir: root,
      // serve our jspm dependencies with the client folder
      routes: {
        '/jspm.config.js': './jspm.config.js',
        '/jspm_packages': './jspm_packages'
      }
    },
    middleware: [
      modRewrite([
        '^([^.]+)$ /index.html [L]'
      ])
    ]
  });

  gulp.watch(
    [paths.html, paths.css, paths.js]
  )
  .on('change', gulp.parallel('lint', reload));
});

gulp.task('dist',
  gulp.series(
    'clean',
    gulp.parallel('static', 'build')
  )
);

// Browser-sync Dist
gulp.task('serve:dist',
  gulp.parallel('lint', 'build', 'static', function serving() {
    serve({
      port: process.env.PORT || 3000,
      open: false,
      notify: false,
      logPrefix: 'FEDS',
      // Run as an https by uncommenting 'https: true'
      // Note: this uses an unsigned certificate which on first access
      // will present a certificate warning in the browser.
      // https: true,
      server: 'dist',
      baseDir: 'dist',
      middleware: [
        modRewrite([
          '^([^.]+)$ /index.html [L]'
        ])
      ]
    });
  })
);

gulp.task('component', () => {
  const cap = (val) => {
    return val.charAt(0).toUpperCase() + val.slice(1);
  };
  const name = yargs.argv.name;
  const parentPath = yargs.argv.parent || '';
  const destPath = path.join(resolveToComponents(), parentPath, name);

  return gulp.src(paths.blankTemplates)
  .pipe($.template({
    name: name,
    upCaseName: cap(name)
  }))
  .pipe($.rename((path) => {
    path.basename = path.basename.replace('temp', name);
  }))
  .pipe(gulp.dest(destPath));
});

gulp.task('default',
  gulp.series(
    'styles', 'static',
    gulp.parallel('lint', 'serve:dist')
  )
);
