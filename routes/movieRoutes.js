const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');

// Routes for movies
router.get('/', movieController.getAllMovies);
router.get('/:id', movieController.getMovieById);
router.post('/add', movieController.addMovie);
router.put('/edit/:id', movieController.updateMovie);
router.delete('/delete/:id', movieController.deleteMovie);

module.exports = router;
