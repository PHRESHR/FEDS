import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import path from 'path';
import jspm from 'jspm';
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
const resolveToApp = (glob)=> {
  glob = glob || '';
  return path.join(root, 'app', glob); // app/{glob}
};

const resolveToComponents = (glob)=> {
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
  entry: path.join(root, 'app/bootstrap.js'),
  blankTemplates: path.join(__dirname, 'generator', 'component/**/*.**'),
  dist: path.join(__dirname, 'dist/')
};
// Clean
gulp.task('clean', ()=> {
  // You can use multiple globbing patterns as you would with `gulp.src`
  return del([path.dist]);
});

// Lint JavaScript
gulp.task('lint', ()=> {
  return gulp.src([paths.js,
    '!**/*.spec.js'
  ])
  // .pipe(reload({stream: true, once: true}))
  .pipe($.eslint())
  .pipe($.eslint.format())
  .on('error', (e) => {
    const basePath = path.join(__dirname, root);
    const filename = e.fileName.substr(basePath.length + 1);

    // notify.bug(
    //   'Lint error: ' + e.message,
    //   filename + ': ' + e.lineNumber
    // );
  });
});

gulp.task('serve', ()=> {
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
  gulp.watch([paths.html], reload);
  gulp.watch([paths.css], reload);
  gulp.watch([paths.js], ['lint']);
});

gulp.task('build', ()=> {
  const dist = path.join(paths.dist + 'app.js');
  // Use JSPM to bundle our app
  return jspm.bundleSFX(resolveToApp('app'), dist, {})
  .then(()=> {
    // Also create a fully annotated minified copy
    return gulp.src(dist)
    .pipe($.ngAnnotate())
    .pipe($.uglify())
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
});

gulp.task('component', ()=> {
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
  .pipe($.rename((path)=> {
    path.basename = path.basename.replace('temp', name);
  }))
  .pipe(gulp.dest(destPath));
});

gulp.task('default', (done) => {
  sync('lint', 'serve', done);
});
