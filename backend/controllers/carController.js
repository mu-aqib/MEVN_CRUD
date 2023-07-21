// backend/controllers/carController.js
import Car from "../models/car";
import Categories from "../models/category";
import asyncHandler from "express-async-handler";

// Function to create a new car
const createCar = asyncHandler(async (req, res) => {
  // Destructure the car data from the request body
  const { carName, carColor, carModel, carRegNo, carType } = req.body;

  // Check if the carType provided is a valid ObjectId
  const category = await Categories.findById(carType);
  if (!category) {
    return res.status(404).json({ error: "Invalid carType." });
  }

  // Create a new car instance with the car data
  const newCar = new Car({
    carName,
    carColor,
    carModel,
    carRegNo,
    carType: carType,
  });

  // Save the new car document to the database
  await newCar.save();

  res.status(201).json(newCar);
});

// Function to get all cars
const getAllCars = asyncHandler(async (req, res) => {
  // Fetch all car documents from the database
  const cars = await Car.find();
  res.status(200).json(cars);
});

// Function to get a specific car by ID
const getCarById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  // Fetch the car document by its ID from the database
  const car = await Car.findById(id);

  if (!car) {
    return res.status(404).json({ error: "Car not found." });
  }

  res.status(200).json(car);
});

// Function to update a car by ID
const updateCarById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  // Check if the carType provided is a valid ObjectId
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

// Function to delete a car by ID
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
