import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

mongoose.model('Item', ItemSchema);
