import Prismicio from 'prismic.io';
import Configuration from './prismic-configuration';
import http from 'http';
import https from 'https';
import url from 'url';
import querystring from 'querystring';

const Prismic = Prismicio.Prismic;

export const previewCookie = Prismic.previewCookie;

// -- Helpers

export const getApiHome = (accessToken, callback) => {
  Prismic.Api(Configuration.apiEndpoint, callback, accessToken);
};

export const getDocumentByUID = (ctx, type, uid, onThen, onNotFound) => {
  console.log(Prismic.Predicates.at('my.' + type + '.uid', uid));
  ctx.api
  .forms('everything')
  .ref(ctx.ref)
  .query(Prismic.Predicates.at('my.' + type + '.uid', uid))
  .submit((err, response) => {
    if(err) {
      onThen && onThen(err);
    } else {
      const document = response.results[0];
      if(document) {
        onThen && onThen(null, document);
      } else {
        onNotFound && onNotFound();
      }
    }
  });
};

export const getDocument = (ctx, id, slug, onThen, onNewSlug, onNotFound) => {
  ctx.api
  .forms('everything')
  .ref(ctx.ref)
  .query('[[:d = at(document.id, "' + id + '")]]')
  .submit((err, response) => {
    const results = response.results;
    const doc = results && results.length ? results[0] : undefined;
    if (err) onThen(err);
    else if(doc && (!slug || doc.slug == slug)) onDone(null, doc);
    else if(doc && doc.slugs.indexOf(slug) > -1 && onNewSlug) onNewSlug(doc);
    else if(onNotFound) onNotFound();
    else onThen();
  });
};

export const getDocuments = (ctx, ids, callback) => {
  if (ids && ids.length) {
    ctx.api
    .forms('everything')
    .ref(ctx.ref).query('[[:d = any(document.id, [' + ids.map((id) => {
      return '"' + id + '"';
    }).join(',') + '])]]')
    .submit((err, response) => {
      callback(err, response.results);
    });
  } else {
    callback(null, []);
  }
};

export const getBookmark = (ctx, bookmark, callback) => {
  const id = ctx.api.bookmarks[bookmark];
  if(id) {
    getDocument(ctx, id, undefined, callback);
  } else {
    callback();
  }
};

// -- Exposing as a helper what to do in the event of an error (please edit prismic-configuration.js to change this)
export const onPrismicError = Configuration.onPrismicError;

// -- Route wrapper that provide a "prismic context" to the underlying function

export const route = (callback) => {
  return (req, res) => {
    const accessToken = (req.session && req.session['ACCESS_TOKEN']) || Configuration.accessToken;
    getApiHome(accessToken, (err, Api) => {
      if (err) {
        onPrismicError(err, req, res);
        return;
      }
      const ctx = {
        endpoint: Configuration.apiEndpoint,
        api: Api,
        ref: req.cookies[Prismic.experimentCookie] || req.cookies[Prismic.previewCookie] || Api.master(),
        linkResolver: (doc) => {
          return Configuration.linkResolver(doc);
        }
      };
      res.locals.ctx = ctx;
      callback(req, res, ctx);
    });
  };
};
