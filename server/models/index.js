const mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI ||
    "mongodb://10.156.0.2:27017/booksData",{ useNewUrlParser: true });

console.log(process.env.MONGODB_URI);
module.exports.books = require("./books.js");
