import Prismicio from 'prismic.io';
import * as prismic from '../../config/prismic-helpers';
import _ from 'lodash';
import Item from './item.model';

export const index = prismic.route((req, res, ctx) => {
  const pagenum = req.params['pagenum'];
  ctx.api
  .form('everything')
  .ref(ctx.ref)
  .query(prismicIo.Predicates.at("document.type", "item"))
  .pageSize(100)
  .submit((err, items) => {
    if (err) { prismic.onPrismicError(err, req, res); return; }
    res.json(200, items);
  });
});

export const page = prismic.route((req, res, ctx) => {
  const pagenum = req.params['pagenum'];
  ctx.api
  .form('everything')
  .ref(ctx.ref)
  .query(prismicIo.Predicates.at("document.type", "item"))
  .pageSize(100)
  .page(pagenum)
  .submit((err, items) => {
    if (err) { prismic.onPrismicError(err, req, res); return; }
    res.json(200, items);
  });
});

export const art = prismic.route((req, res, ctx) => {
  const pagenum = req.params['pagenum'];
  ctx.api
  .form('everything')
  .ref(ctx.ref)
  .query(prismicIo.Predicates.any("document.tags", ["art"]))
  .pageSize(100).page(pagenum)
  .submit((err, arts) => {
    if (err) { prismic.onPrismicError(err, req, res); return; }
    res.json(200, arts);
  });
});

export const institution = prismic.route((req, res, ctx) => {
  ctx.api
  .form('everything')
  .ref(ctx.ref)
  .query(prismicIo.Predicates.at("document.tags", ["art", "institution"]))
  .pageSize(100)
  .submit((err, institutions) => {
    if (err) { prismic.onPrismicError(err, req, res); return; }
    res.json(200, institutions);
  });
});

export const artist = prismic.route((req, res, ctx) => {
  ctx.api
  .form('everything')
  .ref(ctx.ref)
  .query(prismicIo.Predicates.at("document.tags", ["art", "artist"]))
  .pageSize(100)
  .submit((err, artists) => {
    if (err) { prismic.onPrismicError(err, req, res); return; }
    res.json(200, artists);
  });
});

export const artcollaboration = prismic.route((req, res, ctx) => {
  ctx.api
  .form('everything')
  .ref(ctx.ref)
  .query(prismicIo.Predicates.at("document.tags", ["art", "collaboration"]))
  .pageSize(100)
  .submit((err, artcollaborations) => {
    if (err) { prismic.onPrismicError(err, req, res); return; }
    res.json(200, artcollaborations);
  });
});

export const culture = prismic.route((req, res, ctx) => {
  var pagenum = req.params['pagenum'];
  ctx.api
  .form('everything')
  .ref(ctx.ref)
  .query(prismicIo.Predicates.any("document.tags", ["culture"]))
  .pageSize(100)
  .page(pagenum)
  .submit((err, cultures) => {
    if (err) { prismic.onPrismicError(err, req, res); return; }
    res.json(200, cultures);
  });
});

export const editorial = prismic.route((req, res, ctx) => {
  ctx.api
  .form('everything')
  .ref(ctx.ref)
  .query(prismicIo.Predicates.at("document.tags", ["culture", "editorial"]))
  .pageSize(100)
  .submit((err, editorials) => {
    if (err) { prismic.onPrismicError(err, req, res); return; }
    res.json(200, editorials);
  });
});

export const commercial = prismic.route((req, res, ctx) => {
  ctx.api
  .form('everything')
  .ref(ctx.ref)
  .query(prismicIo.Predicates.at("document.tags", ["culture", "commercial"]))
  .pageSize(100)
  .submit((err, editorials) => {
    if (err) { prismic.onPrismicError(err, req, res); return; }
    res.json(200, editorials);
  });
});

export const culturecollaboration = prismic.route((req, res, ctx) => {
  ctx.api
  .form('everything')
  .ref(ctx.ref)
  .query(prismicIo.Predicates.at("document.tags", ["culture", "collaboration"]))
  .pageSize(100)
  .submit((err, culturecollaborations) => {
    if (err) { prismic.onPrismicError(err, req, res); return; }
    res.json(200, culturecollaborations);
  });
});

export const detail = prismic.route((req, res, ctx) => {
  const id = req.params['id'],
  slug = req.params['slug'];

  prismic.getDocument(ctx, id, slug,
    (err, item) => {
      if (err) { prismic.onPrismicError(err, req, res); return; }
      // res.render('detail', {
      //   // doc: doc
      // });
      res.json(200, item);
    },
    (item) => res.redirect(301, ctx.linkResolver(doc));
    (NOT_FOUND) => res.send(404, 'Sorry, we cannot find that!'));
});

const handleError = (res, err) => res.send(500, err);
