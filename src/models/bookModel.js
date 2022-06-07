const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    name: {
        type: String,
        required: true
    },
    author_id: String,
    price: Number,
    rating: Number,  
}, { timestamps: true });


module.exports = mongoose.model('book_author', bookSchema) 
