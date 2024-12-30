const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  image: String,
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  brand: { type: mongoose.Schema.Types.ObjectId, ref: 'Brand' },
  rating: { type: Number, default: 0 },
  ratingCount: { type: Number, default: 0 }
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);
module.exports = Product;