// movieController.js

const Movie = require('../models/movieModel');

// Controller functions for handling movie-related requests

// Get all movies
exports.getAllMovies = async (req, res, next) => {
    try {
        const movies = await Movie.find();
        res.status(200).json({
            status: 'success',
            data: {
                movies
            }
        });
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: err.message
        });
    }
};

// Get movie by ID
exports.getMovieById = async (req, res, next) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (!movie) {
            return res.status(404).json({
                status: 'fail',
                message: 'Movie not found'
            });
        }
        res.status(200).json({
            status: 'success',
            data: {
                movie
            }
        });
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: err.message
        });
    }
};

// Add a new movie
exports.addMovie = async (req, res, next) => {
    try {
        const newMovie = await Movie.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                movie: newMovie
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'error',
            message: err.message
        });
    }
};

// Update movie by ID
exports.updateMovie = async (req, res, next) => {
    try {
        const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!movie) {
            return res.status(404).json({
                status: 'fail',
                message: 'Movie not found'
            });
        }
        res.status(200).json({
            status: 'success',
            data: {
                movie
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'error',
            message: err.message
        });
    }
};

// Delete movie by ID
exports.deleteMovie = async (req, res, next) => {
    try {
        const movie = await Movie.findByIdAndDelete(req.params.id);
        if (!movie) {
            return res.status(404).json({
                status: 'fail',
                message: 'Movie not found'
            });
        }
        res.status(204).json({
            status: 'success',
            data: null
        });
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: err.message
        });
    }
};
