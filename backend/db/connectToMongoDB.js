import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const connectToMongoDB = async (req, res) => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI, {
        });
        console.log('Connected to MongoDB database');
    } catch (error) {
        console.log("Error in connecting to database", error.message);
    }
};

export default connectToMongoDB;