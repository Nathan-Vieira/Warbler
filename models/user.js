//user model
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

//fields for document schema
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  profileImageUrl: {
    type: String,
  },
});

//set model ref as user, set userschema
const User = mongoose.model("User", userSchema);
module.exports = User;
