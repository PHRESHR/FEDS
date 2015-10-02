import Prismicio from 'prismic.io';
import Configuration from './prismic-configuration';
import http from 'http';
import https from 'https';
import url from 'url';
import querystring from 'querystring';

const Prismic = Prismicio.Prismic;

export const previewCookie = Prismic.previewCookie;

// -- Exposing as a helper what to do in the event of an error (please edit prismic-configuration.js to change this)
export const onPrismicError = Configuration.onPrismicError;

export const getApiHome = (accessToken, callback) => {
  Prismic.Api(Configuration.apiEndpoint, callback, accessToken);
};

prismicWithCTX(ctxPromise, req, res) {
  return {

    getApiHome(accessToken, callback) {
      ctxPromise.then(function(ctx){
        res.locals.ctx = ctx;
        Prismic.Api(Configuration.apiEndpoint, callback, accessToken);
      });
    },
    getDocumentByUID(type, uid, onThen , onNotFound) {
      console.log(Prismic.Predicates.at('my.' + type + '.uid', uid));
      ctxPromise.then((ctx) =>{
        res.locals.ctx = ctx;
        ctx.api.forms('everything')
        .ref(ctx.ref)
        .query(Prismic.Predicates.at('my.' + type + '.uid', uid))
        .submit((err, response) => {
          if (err) {
            prismic.onPrismicError(err, req, res);
          } else {
            const document = response.results[0];
            if (document) {
              onThen && onThen(document);
            } else {
              if(onNotFound){
                onNotFound();
              } else {
                res.send(404, 'Missing document ' + uid);
              }
            }
          }
        });
      });
    },
    getBookmark(bookmark, callback) {
      ctxPromise.then(function(ctx){
        res.locals.ctx = ctx;
        const id = ctx.api.bookmarks[bookmark];
        if (id) {
          getDocument(ctx, id, undefined, callback);
        } else {
          callback();
        }
      });
    },
    getDocuments(ids, callback) {
      ctxPromise.then(function(ctx){
        res.locals.ctx = ctx;
        if(ids && ids.length) {
          ctx.api.forms('everything').ref(ctx.ref).query('[[:d = any(document.id, [' + ids.map(function(id) { return '"' + id + '"';}).join(',') + '])]]').submit(function(err, response) {
            callback(err, response.results);
          });
        } else {
          callback(null, []);
        }
      });
    },
    getDocument(ctx, id, slug, onThen, onNewSlug, onNotFound) {
      ctxPromise.then((ctx) => {
        res.locals.ctx = ctx;
        ctx.api.forms('everything')
        .ref(ctx.ref)
        .query('[[:d = at(document.id, "' + id + '")]]')
        .submit((err, response) => {
          const results = response.results;
          const doc = results && results.length ? results[0] : undefined;
          if (err) onThen(err);
          else if (doc && (!slug || doc.slug == slug)) onDone(null, doc);
          else if (doc && doc.slugs.indexOf(slug) > -1 && onNewSlug) onNewSlug(doc);
          else if (onNotFound) onNotFound();
          else onThen();
        });
      });
    }
  };
};

export withContext = (req, res, callback) => {
  const accessToken = (req.session && req.session['ACCESS_TOKEN']) || Configuration.accessToken;
  const ctxPromise = new Promise((fulfill) => {

    getApiHome(accessToken, (err, Api) => {
      if (err) {
        exports.onPrismicError(err, req, res);
        return;
      }
      const ctx = {
        endpoint: Configuration.apiEndpoint,
        api: Api,
        ref: req.cookies[Prismic.experimentCookie] || req.cookies[Prismic.previewCookie] || Api.master(),
        linkResolver(doc) {
          return Configuration.linkResolver(doc);
        }
      };
      fulfill(ctx);
    });

  });
  if (callback){
    res.locals.ctx = ctx;
    ctxPromise.then(callback);
  } else{
    return prismicWithCTX(ctxPromise, req, res);
  }
};
