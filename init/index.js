const initData = require("./init.js");
const Listing = require("../models/propertyModel.js");

require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

const MONGO_URL =
    "mongodb+srv://shrepranav5:KcXUuL0d6OuL0d46@cluster0.646pu7l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
main()
    .then(() => {
        console.log("connected to DB");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(MONGO_URL);
}

const propertyDB = async () => {
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
};

propertyDB();
