import express from "express";
import {
  createCar,
  getAllCars,
  deleteCarById,
  updateCarById,
  // getCarById,
  // updateCarById,
  // deleteCarById,
} from "../controllers/carController.js";
// import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/add", createCar);
router.get("/getAll", getAllCars);
router.put("/update/:id", updateCarById);
router.delete("/:id", deleteCarById);
// router
//   .route("/profile")
//   .get(protect, getUserProfile)
//   .put(protect, updateUserProfile);

export default router;
