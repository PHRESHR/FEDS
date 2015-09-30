import Item from './item.model';

export const register = (socket) => {
  Item.schema.post('save', (doc) => {
    onSave(socket, doc);
  });
  Item.schema.post('remove', (doc) => {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('item:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('item:remove', doc);
}
