const mongoose = require('mongoose')

const AuthorSchema = new mongoose.Schema({
    authorName: {
        type: String,
        required: [true, "Author requires a name"],
        minlength: [2, "Author name is not long enough"]
    },
}, {timestamps: true})

const Author = mongoose.model('Author', AuthorSchema)

module.exports = Author;