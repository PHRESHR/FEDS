/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Covervideo = require('./covervideo.model');

exports.register = function(socket) {
  Covervideo.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Covervideo.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('covervideo:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('covervideo:remove', doc);
}