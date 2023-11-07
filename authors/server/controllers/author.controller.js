const Author = require('../models/author.model');

module.exports.findAllAuthors = (req, res) => {
    Author.find()
        .then((allAuthors) => {
            return res.json(allAuthors)
        })
        .catch((err) => {
            res.json(err)
        });
}

module.exports.findOneAuthor = (req, res) => {
    Author.findOne({ _id: req.params.id })
        .then(oneSingleAuthor => {
            res.json(oneSingleAuthor)
        })
        .catch((err) => {
            res.json(err)
        });}

module.exports.createNewAuthor = (req, res) => {
    Author.create(req.body)
        .then(newlyCreatedAuthor => {
            console.log(req.body)
            res.json(newlyCreatedAuthor)
        })
        .catch((err) => {
            res.status(400).json(err)
        });}

module.exports.updateExistingAuthor = (req, res) => {
    Author.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedAuthor => {
            res.json(updatedAuthor)
        })
        .catch((err) => {
            res.status(400).json(err)
        });}

module.exports.deleteAnExistingAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
        .then(result => {
            console.log("processing Delete")
            res.json(result)

        })
        .catch((err) => {
            res.json(err)
        });
    }
