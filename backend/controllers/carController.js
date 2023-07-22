// import express async handler for managing the errors without using try/catch
import asyncHandler from "express-async-handler";
// Modal
import Car from "../models/carModal.js";
import Categories from "../models/catModal.js";

// ------------ ADD NEWCAR
const createCar = asyncHandler(async (req, res) => {
  // Destructure the car data from the request body
  const { carName, carColor, carModel, carRegNo, carType } = req.body;

  // Check if the carType provided is a valid ObjectId
  const category = await Categories.findById(carType);
  if (!category) {
    res.status(404);
    throw new Error("Invalid carType");
  }

  // Create a new car instance with the car data
  const newCar = await Car.create({
    carName,
    carColor,
    carModel,
    carRegNo,
    carType: carType,
  });

  if (newCar) res.status(200).json(newCar);
  else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// -----------  GET ALLCARS
const getAllCars = asyncHandler(async (req, res) => {
  try {
    const cars = await Car.find().populate("carType");

    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json({ error: "Failed to get cars." });
  }
});

// ---------  GET CAR_BY_ID
const getCarById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  // Fetch the car document by its ID from the database
  const car = await Car.findById(id);

  if (!car) {
    return res.status(500).json({ error: "Car not found." });
  }

  res.status(200).json(car);
});

// ---------  UPDATE CAR_BY_ID
const updateCarById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  // -------- VALIDATION OF CARTYPE :: CATEGORY
  if (updates.carType) {
    const category = await Categories.findById(updates.carType);
    if (!category) {
      return res.status(404).json({ error: "Invalid carType." });
    }
  }

  // Find and update the car document in the database
  const updatedCar = await Car.findByIdAndUpdate(id, updates, {
    new: true,
    runValidators: true,
  });

  if (!updatedCar) {
    return res.status(404).json({ error: "Car not found." });
  }

  res.status(200).json(updatedCar);
});

// ---------- DELETE CAR_BY_ID
const deleteCarById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  // Find and delete the car document from the database
  const deletedCar = await Car.findByIdAndDelete(id);

  if (!deletedCar) {
    return res.status(404).json({ error: "Car not found." });
  }

  res.status(200).json({ message: "Car deleted successfully." });
});

export { createCar, deleteCarById, updateCarById, getAllCars, getCarById };
