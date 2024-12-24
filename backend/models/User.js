const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: {type: String, required: true},
  phone: String,
  picture: String,
  googleId: String,
  addresses: [{
    street: String,
    city: String,
    state: String,
    zipCode: String,
    isDefault: Boolean
  }]
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;