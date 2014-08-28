FEDS
====

Personal FrontEnd Design Starter for building web apps, utilizing Angular, Gulp, Browserify, SASS, BEM and Flexbox.
Borrowing from [Google Web Starter Kit (Beta)](http://developers.google.com/web/starter-kit) and [angularjs-gulp-browserify-boilerplate](github.com/jakemmarsh/angularjs-gulp-browserify-boilerplate) utilizing best [AngularJS practices](github.com/toddmotto/angularjs-styleguide).

---

### Getting Started

Since this borrows heavily from WSK, I've included their [installation docs](docs/install.md) (modified a bit) to help with getting up and running.

---

These are the main libraries that FEDS uses:

* [AngularJS](http://angularjs.org/)
* [SASS](http://sass-lang.com/)
* [Gulp](http://gulpjs.com/)
* [Bower](http://bower.io/)
* [Browserify](http://browserify.org/)

TODO: Add [Polymer](http://polymer-project.org/) maybe????.

---

### AngularJS

AngularJS is a MVW (Model-View-Whatever) Javascript Framework for creating single-page web applications. In this boilerplate, it is used for all the application routing as well as all of the frontend views and logic.

##### File Organization

The AngularJS files are all located within `/app/js`, structured in the following manner:

```
/controllers
  _index.js   (the main module on which to mount all controllers, loaded in main.js)
  example.js
/directives
  _index.js   (the main module on which to mount all directives, loaded in main.js)
  example.js
/services
  _index.js   (the main module on which to mount all services, loaded in main.js)
  example.js
constants.js  (any constant values that you want to make available to Angular)
main.js       (the main file read by Browserify, also where the application is defined and bootstrapped)
on_run.js     (any functions or logic that need to be executed on app.run)
routes.js     (all route definitions and logic)
templates.js  (this is created via Gulp by compiling your views, and will not be present beforehand)
```

Controllers, services, directives, etc. should all be placed within their respective folders and mounted on their respective `_index.js` module. Most other logic can be placed in an existing file, or added in new files as long as it is required inside `main.js`.

##### Dependency injection

Dependency injection is carried out with the `ng-annotate` library. In order to take advantage of this, a simple comment of the format:

```
/**
 * @ngInject
 */
```

needs to be added directly before any Angular functions/modules. The Gulp tasks will then take care of adding any dependency injection, requiring you only to specify the dependencies within the function call and nothing more.

---

### SASS

SASS, standing for 'Syntactically Awesome Style Sheets', is a CSS extension language adding things like extending, variables, and mixins to the language. This boilerplate provides just the `main.scss` file, into which all your SASS files should be imported. A Gulp task (discussed later) is provided for compilation and minification of the stylesheets based on this file.

---

### Browserify

Browserify is a Javascript file and module loader, allowing you to `require('modules')` in all of your files in the same manner as you would on the backend in a node.js environment. The bundling and compilation is then taken care of by Gulp, discussed below.

---

### Gulp

Gulp is a "streaming build system", providing a very fast and efficient method for running your build tasks.

##### Web Server

Gulp is used here to provide a very basic node/Express web server for viewing and testing your application as you build. It serves static files from the `build/` directory, leaving routing up to AngularJS. All Gulp tasks are configured to automatically reload the server upon file changes. The application is served to `localhost:3000` once you run the `gulp dev` task.

##### Scripts

A number of build processes are automatically run on all of our Javascript files, run in the following order:

- **JSHint:** Gulp is currently configured to run a JSHint task before processing any Javascript files. This will show any errors in your code in the console, but will not prevent compilation or minification from occurring.
- **Browserify:** The main build process run on any Javascript files. This processes any of the `require('module')` statements, compiling the files as necessary.
- **ngAnnotate:** This will automatically add the correct dependency injection to any AngularJS files, as mentioned previously.
- **Uglifyify:** This will minify the file created by Browserify and ngAnnotate.

The resulting file (`main.min.js`) is placed inside the directory `/build/js/`.

##### Styles

Just one task is necessary for processing our SASS files, and that is `gulp-sass`. This will read the `main.scss` file, processing and importing any dependencies and then minifying the result. This file (`main.min.css`) is placed inside the directory `/build/css/`.

##### Views

When any changes are made to the `index.html` file, the new file is simply copied to the `/build/` directory without any changes occurring.

Files inside `/app/views/`, on the other hand, go through a slightly more complex process. The `gulp-angular-templatecache` module is used in order to process all views/partials, creating the `template.js` file briefly mentioned earlier. This file will contain all the views, now in Javascript format inside Angular's `$templateCache` service. This will allow us to include them in our Javascript minification process, as well as avoid extra HTTP requests for our views.

---

## Browser Support

At present, we officially aim to support the following browsers:

* IE9, IE10, IE11, IE Mobile 10
* FF 30, 31
* Chrome 34, 35
* Safari 7, 8
* Opera 23, 24
* iOS Safari 7, 8
* Opera Coast
* Android / Chrome 4.4, 4.4.3
* BlackBerry 10

---
