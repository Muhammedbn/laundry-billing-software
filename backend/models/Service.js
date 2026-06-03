const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true }, // Local SQLite ID
  shopId: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true }, // Keep legacy price for backward compatibility
  icon: { type: String },
  image: { type: String },
  category: { type: String },
  pricing: [{
    serviceTypeId: { type: String, required: true },
    price: { type: Number, required: true }
  }],
  updatedAt: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('Service', serviceSchema);
