const express = require("express");
const router = express.Router();
const {  signupUser } = require("../controllers/userController");
const session = require("express-session");


router.post("/signup", signupUser);
module.exports = router;
