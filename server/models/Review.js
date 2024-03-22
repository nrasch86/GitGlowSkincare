const { Schema, model } = require('mongoose');


const reviewSchema = new Schema ({
    rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
    }, 

    title: {
        type: String,
        required: true,
        trim: true,
        minlength: 10,
    },

    reviewText: {
        type: String,
        required: true,
        minlength: 10,
    }
});

const Review = model('Review', reviewSchema);

module.exports = Review;
