const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    title: String,
    description: String,
    author: String,
});

const Books = mongoose.model('Book', todoSchema);

module.exports = Books;
