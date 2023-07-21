import express from "express";
import {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategoryById,
  deleteCategoryById,
} from "../controllers/catController";
// import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/create", createCategory);
router.get("/getAll", getAllCategories);
// router
//   .route("/profile")
//   .get(protect, getUserProfile)
//   .put(protect, updateUserProfile);

export default router;
