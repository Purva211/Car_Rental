// config/db.js
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load .env variables

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/CarRental`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    mongoose.connection.on("connected", () => {
      console.log("Database is connected");
    });

    mongoose.connection.on("error", (err) => {
      console.error(" Database connection error:", err);
    });
  } catch (error) {
    console.error(" Database connection failed:", error.message);
    process.exit(1); // Stop the app if DB fails
  }
};

export default connectDB;
