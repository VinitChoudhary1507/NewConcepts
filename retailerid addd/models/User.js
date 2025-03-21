// models/Product.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  name:{
    type:String,
    required:true
  },
}, { timestamps: true });

module.exports = mongoose.model('UserSchema', UserSchema);
