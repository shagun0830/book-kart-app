const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// Register a new user

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, mobile, password } = req.body;

  const userExitsEmail = await User.findOne({ email });
  const userExitsMobile = await User.findOne({ mobile });

  if (userExitsEmail || userExitsMobile) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({ name, email, mobile, password });

  if (user) {
    res.status(201).json({
      id: user.id,
      name: user.name,
      email: user.email,
      mobile: user.mobile,
    });
  } else {
    res.status(400);
    throw new Error("Error Occured");
  }
});

// authenticate user

const authUser = asyncHandler(async (req, res) => {
  const { email, mobile, password } = req.body;

  const userWithEmail = await User.findOne({ email });
  const userWithMobile = await User.findOne({ mobile });
 
  if (userWithEmail && (await userWithEmail.matchPassword(password))) {
    res.json({
      id: userWithEmail.id,
      name: userWithEmail.name,
      email: userWithEmail.email,
      mobile: userWithEmail.mobile,
    });
  }
  else if ( userWithMobile && (await userWithMobile.matchPassword(password))){
    res.json({
      id: userWithMobile.id,
      name: userWithMobile.name,
      email: userWithMobile.email,
      mobile: userWithMobile.mobile,
    });
  }
   else {
    res.status(400);
    throw new Error("Invalid details");
  }
});

module.exports = { registerUser, authUser };
