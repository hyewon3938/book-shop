const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxLength: 50,
    require: true,
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    lowercase: true,
    match: /.+\@.+@..+/,
    require: true,
  },
  password: {
    type: String,
    minLength: 5,
    trim: true,
    require: true,
  },
  points: {
    type: Number,
    default: 50000,
  },
  role: {
    type: String,
    enum: ["Admin", "User"],
    require: true,
  },
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
});

module.exports = User;
