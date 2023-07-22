import express from "express";
import {
  createCategory,
  getAllCategories,
  updateSingleCat,
  deleteCategoryById,
} from "../controllers/catController.js";
// import { registerUser, loginUser } from "../controllers/userController.js";
// import { protect } from "../middleware/authMiddleware.js";

// import { registerUser, loginUser } from "../controllers/userController.js";

const router = express.Router();

router.post("/add", createCategory);
router.get("/getAll", getAllCategories);
router.put("/update/:id", updateSingleCat);
router.delete("/:id", deleteCategoryById);
// router
//   .route("/profile")
//   .get(protect, getUserProfile)
//   .put(protect, updateUserProfile);

export default router;
