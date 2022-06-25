const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// const generateAuthToken = require("../utils/generateToken");

const userSchema = new mongoose.Schema( // creating a schema for the user
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    mobile: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    tokens: [
      // creating a token array to store multiple tokens when user log in
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true, // creating a timestamp for the user
  }
);

userSchema.pre("save", async function (next) {
  // creating a pre hook to hash the password
  if (!this.isModified("password")) {
    // checking if the password is modified
    next(); // if not modified, then next()
  }

  const salt = await bcrypt.genSalt(10); // creating a salt of 10
  this.password = await bcrypt.hash(this.password, salt); // hashing the password
});

userSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    }); // creating a token
    this.tokens = this.tokens.concat({ token: token }); // adding the token to the tokens array
    await this.save(); // saving the user
    return token; // returning the token
  } catch (error) {
    console.log(error);
  }
};

userSchema.methods.matchPassword = async function (enterpassword) {
  // creating a method to match the password
  return await bcrypt.compare(enterpassword, this.password); // comparing the password
};

const User = mongoose.model("User", userSchema); // creating a model for the user

module.exports = User; // exporting the model
