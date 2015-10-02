import _ from 'lodash';
import fs from 'fs';
import path from 'path';
import express from 'express';
import config from './config';
import favicon from 'serve-favicon';
import compression from 'compression';
import httpProxy from 'http-proxy';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import redis from 'redis';
import chalk from 'chalk';

import * as prismic from './config/prismic-helpers';

import routes from './routes/index';
import videos from './api/video';
import searches from './api/search';
// import items from './api/item';
// import about from './api/about';

console.log(videos);

const client = redis.createClient();
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

const staticOptions = {
    dotfiles: 'ignore',
    etag: true,
    extensions: ['htm', 'html'],
    index: 'index.html',
    lastModified:true,
    maxAge: '1d',
    setHeaders: function (res, path, stat) {
      res.set('x-timestamp', Date.now());
      res.header('Cache-Control', 'public, max-age=1d');
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  }
}

app.use('/', express.static('public', staticOptions ));
// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

client.on('connect', () => {
  console.log(chalk.blue('Redis is connected'));
});

// Routes & API
app.use('/', routes);
app.use('/api/video', videos);
app.use('/api/search', searches);
// app.use('/api/items', items);
// app.use('/api/about', about);
app.use('/*', routes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  console.log('development');
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

export default app;
