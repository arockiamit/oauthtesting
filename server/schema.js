const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  userMobileNumber: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    min: [13, 'Phone number should contain at least 10 digits..'],
    max: [13, 'Phone number should contain at most 10 digits..'],
  },
  contactNumber1: {
    type: Number,
    trim: true,
    min: [10, 'Phone number should contain at least 10 digits..'],
    max: [10, 'Phone number should contain at most 10 digits..'],
  },
  contactNumber2: {
    type: Number,
    trim: true,
    min: [10, 'Phone number should contain at least 10 digits..'],
    max: [10, 'Phone number should contain at most 10 digits..'],
  },
  contactNumber3: {
    type: Number,
    trim: true,
    min: [10, 'Phone number should contain at least 10 digits..'],
    max: [10, 'Phone number should contain at most 10 digits..'],
  },
  callingNumber: {
    type: Number,
    trim: true,
    min: [10, 'Phone number should contain at least 10 digits..'],
    max: [10, 'Phone number should contain at most 10 digits..'],
  },
}, { collection: 'userDetails' });

const UserDetails = mongoose.model('userDetails', userSchema);

module.exports = { UserDetails };
