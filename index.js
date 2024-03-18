require("dotenv").config();
const express = require("express"); //for sending get-post requests
const morgan = require("morgan");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

const home = require("./routes/home.js");
const login = require("./routes/login.js");
const session = require("express-session");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static("public"));

//logger
app.use(morgan("tiny"));

app.use(
    session({
        secret: "your-secret-key",
        resave: true,
        saveUninitialized: true,
    })
);

app.use("/home", home);

app.use("/", login);

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(
                "connected to db & listening on port",
                process.env.PORT
            );
        });
    })
    .catch((error) => {
        console.log(error);
    });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
    console.log("Connected to MongoDB");
});
