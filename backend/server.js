import express from "express";
import cors from "cors";
// connectDB();

const app = express();
const PORT = 3000; // Use any available port for the backend server

app.use(cors());

app.get("/api/data", (req, res) => {
  res.status(200).json({
    message: "Hello API!",
  });
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
