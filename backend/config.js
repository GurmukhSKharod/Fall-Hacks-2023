
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

export const PORT = process.env.PORT || 5555;
export const mongoDBURL = process.env.MONGODB_URI || mongoose.connect();
