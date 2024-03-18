const express = require("express");
const router = express.Router();
const { getUserData } = require("../controllers/userController");
const Property = require("../models/propertyModel");
const Quote = require("../models/quoteModel");
const session = require("express-session");
const mongoose = require("mongoose");

router.get("/", async (req, res) => {
    try {
        const userId = req.session.userId;

        if (!userId) {
            return res.redirect("/login"); // Redirect to login page if not logged in
        }
        console.log(userId);
        const user = await getUserData(userId);

        if (!user) {
            return res.status(404).send("User not found");
        }

        res.locals = {
            user: user,
        };

        res.render("home.ejs");
    } catch (error) {
        console.error("Error in the home route:", error);
        res.status(500).send("Internal Server Error");
    }
});

router.get("/about", async (req, res) => {
    try {
        const userId = req.session.userId;

        if (!userId) {
            return res.redirect("/login"); // Redirect to login page if not logged in
        }
        console.log(userId);
        const user = await getUserData(userId);

        if (!user) {
            return res.status(404).send("User not found");
        }

        res.locals = {
            user: user,
        };

        res.render("about.ejs");
        console.log("here");
    } catch (error) {
        console.error("Error in the home route:", error);
        res.status(500).send("Internal Server Error");
    }
});

router.get("/:id", async (req, res) => {
    try {
        const userId = req.session.userId;

        if (!userId) {
            return res.redirect("/login"); // Redirect to login page if not logged in
        }
        console.log(userId);
        const user = await getUserData(userId);

        if (!user) {
            return res.status(404).send("User not found");
        }

        res.locals = {
            currentPage: "home",
            user: user,
        };

        let { id } = req.params;
        try {
            const property = await Property.find({ city: id });
            res.render("cards.ejs", { prop: property });
        } catch (error) {
            console.error("Error fetching property:", error);
            res.status(500).json({ message: "Error fetching property" });
        }
    } catch (error) {
        console.error("Error in the home route:", error);
        res.status(500).send("Internal Server Error");
    }
});

router.get("/card/:id", async (req, res) => {
    try {
        const userId = req.session.userId;

        if (!userId) {
            return res.redirect("/login"); // Redirect to login page if not logged in
        }
        console.log(userId);
        const user = await getUserData(userId);

        if (!user) {
            return res.status(404).send("User not found");
        }

        res.locals = {
            currentPage: "home",
            user: user,
        };

        let { id } = req.params;
        const property = await Property.findById(id);
        res.render("show.ejs", { prop: property });
    } catch (error) {
        console.error("Error in the home route:", error);
        res.status(500).send("Internal Server Error");
    }
});

router.post("/card/:id", async (req, res) => {
    try {
        const userId = req.session.userId;

        if (!userId) {
            return res.redirect("/login"); // Redirect to login page if not logged in
        }
        console.log(userId);
        const user = await getUserData(userId);

        if (!user) {
            return res.status(404).send("User not found");
        }

        res.locals = {
            currentPage: "home",
            user: user,
        };

        let { id } = req.params;
        const property = await Property.findById(id);
        let email = user.email;
        let propname = property.title;

        // Create a new instance of the Quote model with the data
        const newQuote = new Quote({ plotname: propname, usermail: email });

        // Save the new quote to the database
        await newQuote.save();

        console.log("Quote saved successfully");
        res.redirect("/home");
    } catch (error) {
        console.error("Error in the home route:", error);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;
