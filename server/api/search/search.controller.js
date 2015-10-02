import Prismicio from 'prismic.io';
import * as prismic from '../../config/prismic-helpers';
import _ from 'lodash';

const Prismic = Prismicio.Prismic;

// Get search results
export const index = prismic.route((req, res, ctx) => {
  const q = req.query['q'];
  const docs = null;
  const url = req.url;
  if (q) {
    ctx.api
    .form('everything')
    .set("page", req.param('page') || "1")
    .ref(ctx.ref)
    .query('[[:d = fulltext(document, "' + q + '")]]')
    .submit((err, docs) => {
      if (err) { prismic.onPrismicError(err, req, res); return; }
      res.status(200).json(q, docs, url);
    });
  } else {
    res.status(200).json(q, docs, url);
  }
});

const handleError = (res, err) => res.send(500, err);
