const mongoose = require("mongoose")

const Schema = mongoose.Schema;
const ObjectID = Schema.ObjectID;

const accountSchema = new Schema (
{
    //_id : Schema.ObjectID,
    username : String,
    email : String,
    password : String,
    innitiatedDate :Date,
    name : String,
    idCard : String,
    dateOfBirth : Date,
    gender : String,
    phoneNumber : String,
    national :  String
    
  },
  { versionKey: false })
  module.exports = mongoose.model('account', accountSchema); 