// index.js

const express = require('express');
const app = express();
const connectDB = require('./db/db'); // Import the connectDB function from your db.js file
const movieRoutes = require('./routes/movieRoutes');
const reviewRoutes = require('./routes/reviewRoutes');

// Middleware to parse JSON request bodies
app.use(express.json());

// Middleware for handling routes related to movies
app.use('/api/movies', movieRoutes);

// Middleware for handling routes related to reviews
app.use('/api/reviews', reviewRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    status: 'error',
    message: 'Internal server error'
  });
});

// Connect to MongoDB
connectDB();

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
