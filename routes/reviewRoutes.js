const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

// Routes for reviews
router.post('/add', reviewController.addEditReview);
router.get('/search', reviewController.searchMovieReviews);
router.get('/:id', reviewController.getMovieReviews);
router.delete('/delete/:id', reviewController.deleteReview);

module.exports = router;
