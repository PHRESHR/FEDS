/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Abouttext = require('./abouttext.model');

exports.register = function(socket) {
  Abouttext.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Abouttext.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('abouttext:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('abouttext:remove', doc);
}