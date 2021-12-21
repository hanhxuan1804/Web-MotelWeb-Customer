const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const ratingSchema = new Schema (
{
           
    // customerId:{type: String, maxlength: 255},
    point:{type: Schema.Types.Number},
    //date
    roomId:{type: Schema.Types.ObjectID},
    content:{type: String, maxlength: 255}    
  },
  { collation:"rating" })
  module.exports = mongoose.model('rating', ratingSchema);    