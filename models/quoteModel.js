const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quoteSchema = new Schema({
    plotname: {
        type: String,
        required: true,
    },
    usermail: {
        type: String,
        required: true,
    }
});

const quote = mongoose.model("quote", quoteSchema);
module.exports = quote;         
