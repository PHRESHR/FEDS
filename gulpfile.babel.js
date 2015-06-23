import fs from 'fs';
import path from 'path';
import gulp from 'gulp';
import del from 'del';
import glob from 'glob';
import merge from 'merge-stream';
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
import swPrecache from 'sw-precache';
import yargs from 'yargs';
import pkg from './package.json';

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
	images: resolveToApp('assets/images/**/*'),
	fonts: resolveToApp('assets/fonts/**/*'),
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

gulp.task('assets', function () {
	// Optimize Images
  var images = gulp.src(paths.images)
	.pipe($.cache($.imagemin({
		progressive: true,
		interlaced: true
	})))
	.pipe(gulp.dest(paths.dist + 'assets/images'));

	// Copy Web Fonts To Dist
	var fonts = gulp.src(paths.fonts)
  .pipe(gulp.dest(paths.dist  + 'assets/fonts'));

  return merge(images, fonts);
});

// Copy All Files At The Root Level (app)
gulp.task('copy', function () {
  var app = gulp.src([
		root + '/*',
    '!' + root + '/app/',
    '!' + root + '/index.{html,js}'
  ], {
    dot: true
  }).pipe(gulp.dest('dist'));

  return merge(app)
    .pipe($.size({title: 'copy'}));
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
    baseDir: paths.dist,
		middleware: [
			modRewrite([
				'^([^.]+)$ /index.html [L]'
			])
		]
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

// See http://www.html5rocks.com/en/tutorials/service-worker/introduction/ for
// an in-depth explanation of what service workers are and why you should care.
// Generate a service worker file that will provide offline functionality for
// local resources. This should only be done for the 'dist' directory, to allow
// live reload to work as expected when serving from the 'app' directory.
gulp.task('generate-service-worker', cb => {
  const rootDir = paths.dist;

  swPrecache({
    // Used to avoid cache conflicts when serving on localhost.
    cacheId: pkg.name || 'FEDS',
    staticFileGlobs: [
      // Add/remove glob patterns to match your directory setup.
      `${rootDir}/assets/fonts/**/*.woff`,
      `${rootDir}/assets/images/**/*`,
      `${rootDir}/**/*.js`,
      `${rootDir}/**/*.css`,
      `${rootDir}/*.{html,json}`
    ],
    // Translates a static file path to the relative URL that it's served from.
    stripPrefix: path.join(rootDir, path.sep)
  }, (err, swFileContents) => {
    if (err) {
      cb(err);
      return;
    }

    const filepath = path.join(rootDir, 'service-worker.js');

    fs.writeFile(filepath, swFileContents, err => {
      if (err) {
        cb(err);
        return;
      }
      cb();
    });
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
gulp.task('default', ['clean'], cb => {
  runSequence(
    'styles',
    ['lint', 'build', 'assets', 'copy'],
		'generate-service-worker',
    cb
  );
});
