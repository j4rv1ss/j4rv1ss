const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');

const bookSchema = new mongoose.Schema( {
    bookName: {
        type : String,
        unique: true,
        required: true
    },
    authorName: String,
    category: String,
    year: Number,
  
}, { timestamps: true });

module.exports = mongoose.model('harry potter', bookSchema) //users

