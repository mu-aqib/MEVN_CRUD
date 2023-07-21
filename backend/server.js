import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
// backend routes
// import userRoutes from "./routes/userRoutes.js";
// import catRoutes from "./routes/catRoutes.js";
// import carRoutes from "./routes/carRoutes.js";

const PORT = process.env.PORT || 5000; // Use any available port for the backend server
connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// api
// app.use("/api/users", userRoutes);
// app.use("/api/category", catRoutes);
// app.use("/api/car", carRoutes);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
