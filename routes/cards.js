const express = require("express");
const router = express.Router();
const { getUserData } = require("../controllers/userController");
const session = require("express-session");
const Property = require("../models/propertyModel");

router.get("/home/:id", async (req, res) => {
    let { id } = req.params;
    try {
        const property = await Property.find({ city: id });
        res.render("cards.ejs", {prop:property})
    } catch (error) {
        console.error("Error fetching property:", error);
        res.status(500).json({ message: "Error fetching property" });
    }
});

module.exports = router;
