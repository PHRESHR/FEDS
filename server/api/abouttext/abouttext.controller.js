'use strict';
var prismic = require('../../config/prismic-helpers');
var prismicIo = require('prismic.io').Prismic
var _ = require('lodash');
var Covervideo = require('./abouttext.model');

// Get list of covervideos
exports.index = prismic.route(function(req, res, ctx) {
  ctx.api.form('everything').ref(ctx.ref).query(prismicIo.Predicates.at("document.type", "abouttext")).submit(function(err, abouttexts) {
    if (err) { prismic.onPrismicError(err, req, res); return; }
    res.json(200, abouttexts);
  });
});

exports.detail = prismic.route(function(req, res, ctx) {
  var id = req.params['id'],
  slug = req.params['slug'];

  prismic.getDocument(ctx, id, slug,
    function(err, video) {
      if (err) { prismic.onPrismicError(err, req, res); return; }
      // res.render('detail', {
      //   // doc: doc
      // });
  res.json(200, abouttext);
},
function(video) {
  res.redirect(301, ctx.linkResolver(doc));
},
function(NOT_FOUND) {
  res.send(404, 'Sorry, we cannot find that!');
}
);
});

function handleError(res, err) {
  return res.send(500, err);
}