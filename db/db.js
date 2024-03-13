const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://auth:123@cluster0.o6mtver.mongodb.net/', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1); // Exit the process if there's an error connecting to MongoDB
    }
};

module.exports = connectDB;











// const mongoose = require('mongoose');

// const connectDB = async()=>{
//     await mongoose.connect(`mongodb+srv://auth:123@cluster0.o6mtver.mongodb.net/movie_appy`)

// }
// module.exports = connectDB;