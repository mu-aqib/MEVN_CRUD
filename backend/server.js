import express from "express";
import cors from "cors"; //used for cross browser origin issue
import dotenv from "dotenv"; // used for accessing .env values
dotenv.config();
import connectDB from "./config/db.js";
// error middleware
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
// backend routes
import userRoutes from "./routes/userRoutes.js";
import catRoutes from "./routes/catRoutes.js";
import carRoutes from "./routes/carRoutes.js";

const PORT = process.env.PORT || 5000; // Use any available port for the backend server
connectDB();
const app = express();

app.use(cors());
// For URL-encoded and parsing JSON data in the request body.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// api
app.use("/api/users", userRoutes);
app.use("/api/category", catRoutes);
app.use("/api/car", carRoutes);
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
