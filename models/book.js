const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: { type: String, required: true },
    author: {type: Array, required: true },
    description: {type: String, require: true },
    image: {type: String, require: true },
    link: {type: String, require: true },
    googleId: {type: String, require: true }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;