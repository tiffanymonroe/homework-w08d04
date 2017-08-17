//Dependencies
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

const booksController = require('./controllers/books.js');
app.use('/books', booksController)


//Connections
mongoose.connect('mongodb://localhost:27017/book_app');
mongoose.connection.once('open', ()=>{
  console.log('connected to mongo');
})

app.listen(3000, () => {
  console.log('listening')
})
