import _ from 'lodash';
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import path from 'path';
import jspm from 'jspm';
import systemjsBuilder from 'systemjs-builder';
import sync from 'run-sequence';
import serve from 'browser-sync';
import modRewrite from 'connect-modrewrite';
import fs from 'fs';
import del from 'del';
import precss from 'precss';
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
  css: resolveToApp('**/_*.css'), // stylesheets
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
const styleTask = (stylesPath, srcs) => {
  const processors = [
		// atCSS({
		// 	from: 'client/app/styles/*.css'
		// }),
		precss()
  ];
  return gulp.src(srcs.map((src) => {
      return path.join(root + '/app', stylesPath, src);
    }))
    .pipe($.newer(stylesPath, {extension: '.css'}))
		.pipe($.sourcemaps.init())
    .pipe($.postcss(processors).on('error', console.error.bind(console)))
    .pipe($.rename((filepath) => {
      filepath.basename = path.basename(filepath.dirname);
    }))
		.pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest(path.join(root, 'app')));
};

// Compile and Automatically Prefix Stylesheets
gulp.task('styles', () => {
  return styleTask('.', ['**/_*.css']);
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

gulp.task('build', () => {
  const dist = path.join(paths.dist + 'build.js');

  const Builder = systemjsBuilder;
	const builder = new Builder({
    baseURL: './',
  });
	builder.reset();
  builder.loadConfig("./jspm.config.js")
    .then(() => {
      return builder.buildStatic(resolveToApp('app.bootstrap'), dist, {minify: true, mangle: false, sourceMaps: true})
      .then(() => {
        // Also create a fully annotated minified copy
        return gulp.src(dist)
        .pipe(gulp.dest(paths.dist))
      })
      .then(()=> {
        // Inject minified script into index
        return gulp.src('client/index.html')
        .pipe($.htmlReplace({
          'js': 'build.js'
        }))
        // .pipe($.htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest(paths.dist));
      });
    })
});

// Browser-sync
gulp.task('serve', gulp.series('styles', () => {
  serve({
    port: process.env.PORT || 3000,
    open: false,
    files: [].concat(
      [paths.js],
      [paths.css],
      paths.html
    ),
    server: {
      baseDir: [root, root + '/static'],
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

  gulp.watch( paths.html).on('change', reload);
  gulp.watch( paths.css).on('change', gulp.series('styles', reload));
  gulp.watch( paths.js).on('change', gulp.series('lint', reload));
}));

gulp.task('dist',
  gulp.series(
    'clean',
    gulp.parallel('static', 'build')
  )
);

// Browser-sync Dist
gulp.task('serve:dist',
  gulp.parallel('clean', 'styles', 'lint', 'build', 'static', () => {
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
  gulp.parallel('lint', 'serve'));
