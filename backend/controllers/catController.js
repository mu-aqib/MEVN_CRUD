// import express async handler for managing the errors without using try/catch
import asyncHandler from "express-async-handler";
// Modal
import Categories from "../models/catModal.js";

const createCategory = asyncHandler(async (req, res) => {
  let name = req.body.name.toLowerCase();

  // check exisiting category
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

const getAllCategories = asyncHandler(async (req, res) => {
  // Fetch all category documents from the database
  const categories = await Categories.find();
  const array = categories.map((item) => {
    return {
      id: item._id,
      name: item.name,
    };
  });
  res.status(200).json(array);
});

// ----------   UPDATE SINGLE_CATEGORY
const updateSingleCat = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    // Find the category by ID and update its name
    const updatedCategory = await Categories.findByIdAndUpdate(
      id,
      { name },
      { new: true } // Setting { new: true } returns the updated category instead of the old one
    );

    if (!updatedCategory) {
      res.status(404);
      throw new Error("Category not found");
    }

    return res.status(200).json(updatedCategory);
  } catch (error) {
    res.status(500);
    throw new Error("Internal server error : " + error);
  }
});

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
