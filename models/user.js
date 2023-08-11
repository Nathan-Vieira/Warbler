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

//pre save hook function
//wait for password to hash, set hash to hashed password
//move to next middleware function
userSchema.pre("save", async function (next) {
  try {
    if (!this.isModified("passowrd")) {
      return next();
    }
    let hashedPassowrd = await bcrypt.hash(this.password, 10);
    this.password = hashedPassowrd;
    return next();
  } catch (err) {
    return next(err);
  }
});

//pass comparison function
//every model has function to compare another hashed password to theirs
userSchema.method.comparePassword = async function(candidatePassword, next){
  try {
    let isMatch = await bcrypt.compare(candidatePassword, this)
    return isMatch;
  } catch (error) {
    return next(error)
  }
}

//set model ref as user, set userschema
const User = mongoose.model("User", userSchema);
module.exports = User;
