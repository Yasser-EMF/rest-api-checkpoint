// models/User.js

const mongoose = require('mongoose');

// Define the User schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
}, { timestamps: true });

// Export the User model
module.exports = mongoose.model('User', userSchema);
