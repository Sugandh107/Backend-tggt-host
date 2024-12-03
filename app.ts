import express, { Request, Response } from "express";
import mongoose from "mongoose";
import userRoutes from "./src/routes/userRoutes";
import friendRoutes from "./src/routes/friendRoutes"

// Create an Express application
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Use user routes
app.use("/api", userRoutes);
app.use("/api",friendRoutes)

// Root route
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the TypeScript MongoDB API");
});

// MongoDB connection
const DB_URI = "mongodb://localhost:27017/mockserver"; // Adjust Mongo URI as needed
mongoose.connect(DB_URI).then(() => {
    console.log("MongoDB connected successfully");
    app.listen(5000, () => {
      console.log("Server is running on http://localhost:5000");
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });
