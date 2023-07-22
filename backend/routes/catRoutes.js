import express from "express";
import {
  createCategory,
  getAllCategories,
  updateSingleCat,
  deleteCategoryById,
} from "../controllers/catController.js";
// protect is a middleware for validating token and user
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/add", protect, createCategory);
router.get("/getAll", getAllCategories);
router.put("/update/:id", protect, updateSingleCat);
router.delete("/:id", protect, deleteCategoryById);

export default router;
