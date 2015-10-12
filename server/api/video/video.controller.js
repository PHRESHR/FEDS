import Prismicio from 'prismic.io';
import * as prismic from '../../config/prismic-helpers';
import _ from 'lodash';

const Prismic = Prismicio.Prismic;

// Get list of Videos
export const index = prismic.route((req, res, ctx) => {
  ctx.api.form('everything')
  .set('pageSize', '21')
  .ref(ctx.ref)
  .query(Prismic.Predicates.at('document.type', 'video'))
  .submit((err, videos) => {
    if (err) { prismic.onPrismicError(err, req, res); return; }
    res.status(200).json(videos);
  });
});

// Get Page
export const page = prismic.route((req, res, ctx) => {
  ctx.api.form('everything')
  .set('page', req.params['pagenum'] || '1')
  .ref(ctx.ref)
  .query(Prismic.Predicates.at('document.type', 'video'))
  .submit((err, videos) => {
    if (err) { prismic.onPrismicError(err, req, res); return; }
    res.status(200).json(videos);
  });
});

// Get featured
export const featured = prismic.route((req, res, ctx) => {
  ctx.api.form('everything')
  .set('pageSize', '1')
  .ref(ctx.ref)
  .query(Prismic.Predicates.at('document.type', 'featured'))
  .submit((err, videos) => {
    if (err) { prismic.onPrismicError(err, req, res); return; }
    res.status(200).json(videos);
  });
});

// Get channel: Docu-Series
export const docuseries = prismic.route((req, res, ctx) => {
  ctx.api.form('everything')
  .set('page', req.params['pagenum'] || '1')
  .ref(ctx.ref)
  .query(
    Prismic.Predicates.at('document.type', 'video'),
    // Prismic.Predicates.any('document.tags', ['Docu-Series'])
    Prismic.Predicates.any('my.video.channel', ['docu-series'])
  )
  .pageSize(21)
  .submit((err, videos) => {
    if (err) { prismic.onPrismicError(err, req, res); return; }
    res.status(200).json(videos);
  });
});

// Get channel: Radio-TV-Film
export const radiotvfilm = prismic.route((req, res, ctx) => {
  ctx.api.form('everything')
  .set('page', req.params['pagenum'] || '1')
  .ref(ctx.ref)
  .query(
    Prismic.Predicates.at('document.type', 'video'),
    Prismic.Predicates.any('my.video.channel', ['radio-tv-film'])
  )
  .pageSize(21)
  .submit((err, videos) => {
    if (err) { prismic.onPrismicError(err, req, res); return; }
    res.status(200).json(videos);
  });
});

// Get channel: Music
export const music = prismic.route((req, res, ctx) => {
  ctx.api.form('everything')
  .set('page', req.params['pagenum'] || '1')
  .ref(ctx.ref)
  .query(
    Prismic.Predicates.at('document.type', 'video'),
    Prismic.Predicates.any('my.video.channel', ['music'])
  )
  .pageSize(21)
  .submit((err, videos) => {
    if (err) { prismic.onPrismicError(err, req, res); return; }
    res.status(200).json(videos);
  });
});

// Get channel: Comedy
export const comedy = prismic.route((req, res, ctx) => {
  ctx.api.form('everything')
  .set('page', req.params['pagenum'] || '1')
  .ref(ctx.ref)
  .query(
    Prismic.Predicates.at('document.type', 'video'),
    Prismic.Predicates.any('my.video.channel', ['comedy'])
  )
  .pageSize(21)
  .submit((err, videos) => {
    if (err) { prismic.onPrismicError(err, req, res); return; }
    res.status(200).json(videos);
  });
});

// Get channel: Lifestyle
export const lifestyle = prismic.route((req, res, ctx) => {
  ctx.api.form('everything')
  .set('page', req.params['pagenum'] || '1')
  .ref(ctx.ref)
  .query(
    Prismic.Predicates.at('document.type', 'video'),
    Prismic.Predicates.any('my.video.channel', ['lifestyle'])
  )
  .pageSize(21)
  .submit((err, videos) => {
    if (err) { prismic.onPrismicError(err, req, res); return; }
    res.status(200).json(videos);
  });
});

// Get single Video
export const detail = prismic.route((req, res, ctx) => {
  const id = req.params['id'];
  const slug = req.params['slug'];

  prismic.getDocument(ctx, id, slug,
    (err, doc) => {
      if (err) { prismic.onPrismicError(err, req, res); return; }
      res.status(200).json(doc);
    },
    (doc) => {
      res.redirect(301, ctx.linkResolver(doc));
    },
    (NOT_FOUND) => {
      res.send(404, 'Sorry, we cannot find that!');
    }
  );
});

const handleError = (res, err) => res.send(500, err);
