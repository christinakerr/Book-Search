const Book = require("../models/book");

module.exports = {
    findAll: function (req, res) {
        Book
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        console.log(req.body)
        Book
            .create(req.body)
            .then(dbModel => {
                console.log(dbModel)
                res.json(dbModel)
                })
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        Book
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}