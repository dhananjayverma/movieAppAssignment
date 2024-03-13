const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    movieId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie',
        required: true
      },
  reviewerName: {
    type: String,
    default: ''
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 10
  },
  reviewComment: {
    type: String,
    required: true
  },

});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
