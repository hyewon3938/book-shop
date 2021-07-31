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

userSchema.pre("save", function (next) {
  let user = this;

  if (user.isModified("password")) {
    bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) return next(err);

      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

const User = mongoose.model("user", userSchema);

module.exports = User;
