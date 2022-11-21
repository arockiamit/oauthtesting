const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  contactNumber1: {
    type: Number,
    trim: true,
    // match: /^(\()?\d{3}(\))?(\s)?\d{3}(\s)\d{4}$/,
    min: [13, 'Phone number should contain at least 10 digits..'],
    max: [13, 'Phone number should contain at most 10 digits..'],
  },
  contactNumber2: {
    type: Number,
    trim: true,
    min: [13, 'Phone number should contain at least 10 digits..'],
    max: [13, 'Phone number should contain at most 10 digits..'],
  },
  contactNumber3: {
    type: Number,
    trim: true,
    min: [13, 'Phone number should contain at least 10 digits..'],
    max: [13, 'Phone number should contain at most 10 digits..'],
  },
  callingNumber: {
    type: Number,
    trim: true,
    min: [13, 'Phone number should contain at least 10 digits..'],
    max: [13, 'Phone number should contain at most 10 digits..'],
  },
  callingPersonName: {
    type: String,
  },
  contactName1: {
    type: String,
  },
  contactName2: {
    type: String,
  },
  contactName3: {
    type: String,
  },
}, { collection: 'userDetails' });

const UserDetails = mongoose.model('userDetails', userSchema);

module.exports = { UserDetails };
