import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/merndb");
        console.log("Database connected successfully");
    } catch (error) {
        console.log("Error connecting to database", error);
    }
};