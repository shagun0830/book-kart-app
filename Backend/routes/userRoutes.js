const express = require("express");
const { registerUser } = require("../controller/userController");
const { authUser } = require("../controller/userController");
const {logoutUser} = require("../controller/userController");
const router = express.Router(); // creating a router

router.route("/register").post(registerUser); // registering a user
router.route("/login").post(authUser); // authenticating a user
router.route("/logout").get(logoutUser)

module.exports = router;
