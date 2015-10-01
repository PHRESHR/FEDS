import Prismicio from 'prismic.io';
import * as prismic from '../../config/prismic-helpers';
import _ from 'lodash';

const Prismic = Prismicio.Prismic;

// Get list of About Text
export const index = prismic.route((req, res, ctx) => {
  ctx.api
  .form('everything')
  .ref(ctx.ref)
  .query(Prismic.Predicates.at("document.type", "abouttext"))
  .submit((err, abouttexts) => {
    if (err) { prismic.onPrismicError(err, req, res); return; }
    res.json(200, abouttexts);
  });
});

export const detail = prismic.route((req, res, ctx) => {
  const id = req.params['id'],
  slug = req.params['slug'];

  prismic.getDocument(ctx, id, slug,
    (err, video) => {
      if (err) { prismic.onPrismicError(err, req, res); return; }
    res.json(200, abouttext);
    },
    (video) => {
      res.redirect(301, ctx.linkResolver(doc));
    },
    (NOT_FOUND) => {
      res.send(404, 'Sorry, we cannot find that!');
    }
  );
});

const handleError = (res, err) => res.send(500, err);
