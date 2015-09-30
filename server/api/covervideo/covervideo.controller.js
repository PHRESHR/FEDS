'use strict';
var prismic = require('../../config/prismic-helpers');
var prismicIo = require('prismic.io').Prismic
var _ = require('lodash');
var Covervideo = require('./covervideo.model');

// Get list of covervideos
exports.index = prismic.route(function(req, res, ctx) {
  ctx.api.form('everything').ref(ctx.ref).query(prismicIo.Predicates.at("document.type", "covervideo")).submit(function(err, covervideos) {
    if (err) { prismic.onPrismicError(err, req, res); return; }
    res.json(200, covervideos);
  });
});

// Get a single covervideo
// exports.show = function(req, res) {
//   Covervideo.findById(req.params.id, function (err, covervideo) {
//     if(err) { return handleError(res, err); }
//     if(!covervideo) { return res.send(404); }
//     return res.json(covervideo);
//   });
// };

// Creates a new covervideo in the DB.
// exports.create = function(req, res) {
//   Covervideo.create(req.body, function(err, covervideo) {
//     if(err) { return handleError(res, err); }
//     return res.json(201, covervideo);
//   });
// };

// Updates an existing covervideo in the DB.
// exports.update = function(req, res) {
//   if(req.body._id) { delete req.body._id; }
//   Covervideo.findById(req.params.id, function (err, covervideo) {
//     if (err) { return handleError(res, err); }
//     if(!covervideo) { return res.send(404); }
//     var updated = _.merge(covervideo, req.body);
//     updated.save(function (err) {
//       if (err) { return handleError(res, err); }
//       return res.json(200, covervideo);
//     });
//   });
// };

// Deletes a covervideo from the DB.
// exports.destroy = function(req, res) {
//   Covervideo.findById(req.params.id, function (err, covervideo) {
//     if(err) { return handleError(res, err); }
//     if(!covervideo) { return res.send(404); }
//     covervideo.remove(function(err) {
//       if(err) { return handleError(res, err); }
//       return res.send(204);
//     });
//   });
// };

exports.detail = prismic.route(function(req, res, ctx) {
  var id = req.params['id'],
  slug = req.params['slug'];

  prismic.getDocument(ctx, id, slug,
    function(err, video) {
      if (err) { prismic.onPrismicError(err, req, res); return; }
      // res.render('detail', {
      //   // doc: doc
      // });
  res.json(200, covervideo);
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