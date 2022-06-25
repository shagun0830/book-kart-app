const express = require("express");
const { registerUser } = require("../controller/userController");
const { authUser } = require("../controller/userController");

const router = express.Router(); // creating a router

router.route("/register").post(registerUser); // registering a user
router.route("/login").post(authUser); // authenticating a user

module.exports = router;
