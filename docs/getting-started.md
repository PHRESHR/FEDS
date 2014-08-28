# Installation

To take advantage of FEDS you need to:
1. Install the dependencies if you don't already have them.
2. Clone repo.
3. Modify the application to your liking.
4. Deploy your production code.

## Dependencies

The dependencies are:
* [Node.js](http://nodejs.org)
* [Ruby](https://www.ruby-lang.org/)
* [gulp.js](http://gulpjs.com)
* [bower](http://bower.io/)
* [Sass](http://sass-lang.com/install)

# Commands

There are many commands available to help you build and test sites. Here are a few highlights to get started with.

## Watch For Changes & Automatically Refresh Across Devices

```sh
$ gulp serve
```

This outputs an IP address you can use to locally test and another that can be used on devices connected to your network.

## Build & Optimize

```sh
$ gulp
```

Build and optimize the current project, ready for deployment.
This includes linting as well as image, script, stylesheet and HTML optimization and minification.

## Performance Insights

```sh
$ gulp pagespeed
```

Runs the deployed (public) version of your site against the [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) API to help you stay on top of where you can improve.
