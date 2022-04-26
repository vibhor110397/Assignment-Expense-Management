
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
 
  },
  password: {
    type: String,
    required: true,
  },
  userType:{
    type:String,
  }
});

module.exports = mongoose.model('User', userSchema);