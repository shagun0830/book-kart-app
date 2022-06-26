const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// Register a new user

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, mobile, password } = req.body; // extracting the data from the request body

  const userExitsEmail = await User.findOne({ email }); // checking if the user already exists
  const userExitsMobile = await User.findOne({ mobile }); // checking if the user already exists

  if (userExitsEmail || userExitsMobile) {
    // if the user already exists
    res.status(400);
    throw new Error("User already exists"); // throwing an error
  }

  const user = await User.create({ name, email, mobile, password }); // if not exits then creating a new user

  if (user) {
    res.json({
      message: "User created successfully", // sending a message in console
    });
  } else {
    res.status(400); // if not created then sending a status code
    throw new Error("Error Occured"); // throwing an error
  }
});

// authenticate user

const authUser = asyncHandler(async (req, res) => {
  // authenticating a user
  const { email, password } = req.body; /// extracting the data from the request body

  const user = await User.findOne({ email }); // finding the user

  if (user && (await user.matchPassword(password))) {

    token = await user.generateAuthToken(); // generating a token
    console.log(token);

    res.cookie("loginToken", token,{
      expires: new Date(Date.now() + 25892000000),
      httpOnly: true,
    });

    res.json({
      id: user._id,
      name: user.name,
      email: user.email,
      mobile: user.mobile,
      token: token,});

  } else {
    res.status(400);
    throw new Error("Invalid Email or Password"); // throwing an error
  }
});

// const aboutPage = async (req, res, authenticate) => {
//   // router.get("/about", authenticate, (req, res) => {
//   //   console.log("working fine");
//    res.send(req.rootUser);
// }

module.exports = { registerUser, authUser } // exporting the functions
