
const AuthorController = require('../controllers/author.controller')
console.log("hello routes")

module.exports = app => {
    app.get('/api/authors', AuthorController.findAllAuthors),
    app.get('/api/authors/:id', AuthorController.findOneAuthor),
    app.patch('/api/authors/:id', AuthorController.updateExistingAuthor),
    app.post('/api/authors', AuthorController.createNewAuthor),
    app.delete('/api/authors/:id', AuthorController.deleteAnExistingAuthor)
}