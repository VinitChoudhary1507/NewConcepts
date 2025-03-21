// models/Product.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
  Product:{
    type:String,
    required:true
  },
 // In your Product schema, add:
retailer_id: { type: Schema.ObjectId }, // Already exists as ownerId
retailer_name: { type: String } // New field

}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
