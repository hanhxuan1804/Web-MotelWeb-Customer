const mongoose = require("mongoose")

const Schema = mongoose.Schema;
const ObjectId= Schema.ObjectId;

const billSchema= new Schema (
{
    name: String,
    date: Date,
    totalPrice: Number,
    customerEmail:  String,
    roomName:  String,
    checkin: Date,
    checkout: Date,
    numAdults: Number,
    numChilds: Number,
    solved: Boolean,
    serviceName:  [String],
  },
  {
  versionKey: false,
});
  module.exports = mongoose.model('bills', billSchema);