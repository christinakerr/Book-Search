const db = require("../models/book");
const axios = require("axios");

module.exports = {
    findAll: function (req, res) {
        const { query:params } = req;
        axios.get("https://www.googleapis.com/books/v1/volumes?q=", {params})
            .then(result => console.log(result))
            .then(apiBooks => 
                db.Book.find().then(dbBooks => 
                    apiBooks.filter(apiBook => 
                        dbBooks.every(dbBook => dbBook.googleId.toString() !== apiBook.id))))
            .then(books => res.json(books))
            .catch(err => res.status(422).json(err))
    }
}