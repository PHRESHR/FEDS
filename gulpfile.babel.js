import path from 'path';
import gulp from 'gulp';
import del from 'del';
import glob from 'glob';
import runSequence from 'run-sequence';
import autoprefixer from 'autoprefixer-core';
import nested from 'postcss-nested';
import mixins from 'postcss-mixins';
import selector from 'postcss-custom-selectors';
import vars from 'postcss-simple-vars';
import cssnext from 'cssnext';
import lost from 'lost';
import csswring from 'csswring';
import mqpacker from 'css-mqpacker';
import jspm from 'jspm';
import browserSync from 'browser-sync';
import modRewrite from 'connect-modrewrite';
import gulpLoadPlugins from 'gulp-load-plugins';
import yargs from 'yargs';

const $ = gulpLoadPlugins();
const reload = browserSync.reload;
const argv = yargs.argv;

const root = 'client';

// helper method to resolveToApp paths
let resolveTo = function(resolvePath) {
	return function(glob) {
		glob = glob || '';
		return path.join(root, resolvePath, glob);
	};
};

const resolveToApp = resolveTo('app'); // app/{glob}
const resolveToComponents = resolveTo('app/components'); // app/components/{glob}

// map of all our paths
let paths = {
	js: resolveToApp('**/*.js'),
	css: resolveToApp('**/*.css'),
	html: [
		resolveToApp('**/*.html'),
		path.join(root, 'index.html')
	],
	blankTemplates: path.join(__dirname, 'generator', 'component/**/*.**'),
	dist: path.join(__dirname, 'dist/')
};

// Style tasks
let styleTask = (stylesPath, srcs) => {
  const processors = [
    lost(),
    cssnext(),
    selector(),
    mixins(),
    vars(),
    nested(),
    autoprefixer({browsers: ['last 2 version']}),
		csswring(),
		mqpacker()
  ];
  return gulp.src(srcs.map((src) => {
      return path.join(root + '/app', stylesPath, src);
    }))
    .pipe($.changed(stylesPath, {extension: '.css'}))
		.pipe($.sourcemaps.init())
    .pipe($.postcss(processors).on('error', console.error.bind(console)))
    .pipe($.rename({
      extname: '.min.css'
    }))
		.pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest(root + '/app'));
};

// Compile and Automatically Prefix Stylesheets
gulp.task('styles', () => {
  return styleTask('styles', ['app.css']);
});

// Lint JavaScript
gulp.task('lint', () => {
  return gulp.src([paths.js, '!**/*.spec.js'])
    .pipe(reload({stream: true, once: true}))
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.if(!browserSync.active, $.jshint.reporter('fail')));
});

// Clean output directory
gulp.task('clean', () => del(['.tmp', root + '/**/*.min.css', root + '/**/*.map', 'dist/*', '!dist/.git'], {dot: true}));

// Watch files for changes & reload
gulp.task('serve', ['styles'], () => {
  browserSync({
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
			},
      middleware: [
        modRewrite([
					'^([^.]+)$ /index.html [L]'
			])
      ]
		},
	});
  gulp.watch([paths.html], reload);
  gulp.watch([paths.css], ['styles', reload]);
  gulp.watch([paths.js, '!**/*.spec.js'], ['lint']);
});

// Build and serve the output from the dist build
gulp.task('serve:dist', ['default'], () => {
  browserSync({
    port: process.env.PORT || 3000,
		open: false,
    // Run as an https by uncommenting 'https: true'
    // Note: this uses an unsigned certificate which on first access
    //  will present a certificate warning in the browser.
    // https: true,
    server: paths.dist,
    baseDir: paths.dist
  });
});

gulp.task('build', () => {
	let dist = path.join(paths.dist + 'app.js');
	// Use JSPM to bundle our app
	return jspm.bundleSFX(resolveToApp('app'), dist, {})
		.then(function() {
			// Also create a fully annotated minified copy
			return gulp.src(dist)
				.pipe($.ngAnnotate())
				.pipe($.uglify())
				.pipe($.rename('app.min.js'))
				.pipe(gulp.dest(paths.dist));
		})
		.then(function() {
			// Inject minified script into index
		  return gulp.src('client/index.html')
				.pipe($.htmlReplace({
					'js': 'app.min.js'
				}))
				.pipe(gulp.dest(paths.dist));
		});
});

gulp.task('component', () => {
	let cap = function(val){
		return val.charAt(0).toUpperCase() + val.slice(1);
	};

  const name = argv.name;
  const parentPath = argv.parent || '';
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

// Build production files, the default task
gulp.task('default');

gulp.task('default', ['clean'], cb => {
  runSequence(
    'styles',
    ['jshint', 'build'],
    cb
  );
});
