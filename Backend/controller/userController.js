const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, mobile, password } = req.body;

  const userExitsE = await User.findOne({ email });
  const userExitsM = await User.findOne({ mobile });

  if (userExitsE || userExitsM) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({ name, email, mobile, password });

  if(user){
    res.status(201).json({
      id:user.id,
      name:user.name,
      email:user.email,
     mobile:user.mobile,
  })
}
else{
    res.status(400);
    throw new Error("Error Occured");
}
});

module.exports = { registerUser };
