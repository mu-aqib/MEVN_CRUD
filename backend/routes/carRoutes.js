import express from "express";
import {
  createCar,
  getAllCars,
  deleteCarById,
  updateCarById,
} from "../controllers/carController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/add", protect, createCar);
router.get("/getAll", getAllCars);
router.put("/update/:id", protect, updateCarById);
router.delete("/:id", protect, deleteCarById);

export default router;
