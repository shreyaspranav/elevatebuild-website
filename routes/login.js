const express = require("express");
const router = express.Router();
const { loginUser, signupUser } = require("../controllers/userController");
const session = require("express-session");

router.get("/login", async (req, res) => {
    res.locals.currentPage = "login";
    res.render("login.ejs");
});

router.get("/signup", async (req, res) => {
    res.render("login.ejs");
});

// login route
router.post("/login", loginUser);

router.post("/signup", signupUser);

module.exports = router;
