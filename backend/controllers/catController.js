// import express async handler for managing the errors without using try/catch
import asynHandler from "express-async-handler";
// Modal
import Categories from "../models/catModal.js";

const createCategory = asynHandler(async (req, res) => {
  let name = req.body.name.toLowerCase();

  // check exisiting category
  const existingCategory = await Categories.findOne({ name });

  if (existingCategory) {
    res.status(400);
    throw new Error("User already exists");
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

// const getAllCategories = asyncHandler(async (req, res) => {
//   // Fetch all category documents from the database
//   const categories = await Categories.find();
//   res.status(200).json(categories);
// });
// // Function to get a specific category by ID
// const getCategoryById = asyncHandler(async (req, res) => {
//   const { id } = req.params;

//   // Fetch the category document by its ID from the database
//   const category = await Categories.findById(id);

//   if (!category) {
//     return res.status(404).json({ error: "Category not found." });
//   }

//   res.status(200).json(category);
// });

// // Function to update a category by ID
// const updateCategoryById = asyncHandler(async (req, res) => {
//   const { id } = req.params;
//   const updates = req.body;

//   // Find and update the category document in the database
//   const updatedCategory = await Categories.findByIdAndUpdate(id, updates, {
//     new: true,
//     runValidators: true,
//   });

//   if (!updatedCategory) {
//     return res.status(404).json({ error: "Category not found." });
//   }

//   res.status(200).json(updatedCategory);
// });

// // Function to delete a category by ID
// const deleteCategoryById = asyncHandler(async (req, res) => {
//   const { id } = req.params;

//   // Find and delete the category document from the database
//   const deletedCategory = await Categories.findByIdAndDelete(id);

//   if (!deletedCategory) {
//     return res.status(404).json({ error: "Category not found." });
//   }

//   res.status(200).json({ message: "Category deleted successfully." });
// });

export {
  createCategory,
  // getAllCategories,
  // getCategoryById,
  // updateCategoryById,
  // deleteCategoryById,
};
