const mongoose = require("mongoose")

const Schema = mongoose.Schema;
const ObjectID= Schema.ObjectID;

const roomSchema= new Schema (
{
    id: Number,
    name: String,
    price: Number,
    image: String,
    status: String,
    quantity: Number,
    type: String
  })
  module.exports = mongoose.model('room', roomSchema); 