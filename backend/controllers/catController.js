// express-async-handler is error handling middleware
import asyncHandler from "express-async-handler";
// Modal
import Categories from "../models/catModal.js";

// ------------ ADD NEW CATEGORY  ------------------  //
const createCategory = asyncHandler(async (req, res) => {
  let name = req.body.name.toLowerCase();

  // Checking Duplicate
  const existingCategory = await Categories.findOne({ name });

  if (existingCategory) {
    res.status(400);
    throw new Error("Category already available");
  }

  //   add category to DB
  const newCategory = await Categories.create({
    name,
  });

  if (newCategory) res.status(200).json(newCategory);
  else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// ------------ GET ALL CATEGORIES  ------------------  //
const getAllCategories = asyncHandler(async (req, res) => {
  const categories = await Categories.find();
  const array = categories.map((item) => {
    return {
      id: item._id,
      name: item.name,
    };
  });
  res.status(200).json(array);
});

// ----------   UPDATE SINGLE_CATEGORY  --------------  //
const updateSingleCat = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  // Find the category by ID and update its name
  const updatedCategory = await Categories.findByIdAndUpdate(
    id,
    { name },
    { new: true } // Setting { new: true } returns the updated category instead of the old one
  );

  if (updatedCategory) {
    return res.status(200).json(updatedCategory);
  } else {
    res.status(404);
    throw new Error("Category not Updated");
  }
});

// ----------   DELETE SINGLE_CATEGORY  --------------  //
const deleteCategoryById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const del = await Categories.findByIdAndDelete(id);
  if (del) res.status(200).json({ message: "Category deleted successfully" });
  else {
    res.status(404);
    throw new Error("Category not deleted ");
  }
});

export {
  createCategory,
  getAllCategories,
  updateSingleCat,
  deleteCategoryById,
};
