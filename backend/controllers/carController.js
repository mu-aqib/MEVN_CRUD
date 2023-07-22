// express-async-handler is error handling middleware
import asyncHandler from "express-async-handler";
// Modal
import Car from "../models/carModal.js";
import Categories from "../models/catModal.js";

// ------------ ADD NEWCAR  ------------------  //
const createCar = asyncHandler(async (req, res) => {
  const { carName, carColor, carModel, carRegNo, carType } = req.body;

  // validate category
  const category = await Categories.findById(carType);
  if (!category) {
    res.status(404);
    throw new Error("Invalid carType");
  }

  // Add document in DB
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

// -----------  GET ALLCARS   ------------------ //
const getAllCars = asyncHandler(async (req, res) => {
  const cars = await Car.find().populate("carType");
  if (cars) res.status(200).json(cars);
  else res.status(500).json({ error: "Failed to get cars." });
});

// ---------  GET CAR_BY_ID  --------------------  //
const getCarById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  // fetch singleCar
  const car = await Car.findById(id);

  if (!car) {
    return res.status(500).json({ error: "Car not found." });
  }

  res.status(200).json(car);
});

// ---------  UPDATE CAR_BY_ID   --------------------  //
const updateCarById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  // -------- Validate category before updating Car
  if (updates.carType) {
    const category = await Categories.findById(updates.carType);
    if (!category) {
      return res.status(404).json({ error: "Invalid carType." });
    }
  }

  // update car by ID
  const updatedCar = await Car.findByIdAndUpdate(id, updates, {
    new: true,
    runValidators: true,
  });

  if (!updatedCar) {
    return res.status(404).json({ error: "Car not found." });
  }

  res.status(200).json(updatedCar);
});

// ---------- DELETE CAR_BY_ID   --------------------  //
const deleteCarById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  // Delte car by ID
  const del = await Car.findByIdAndDelete(id);

  if (del) res.status(200).json({ message: "Car deleted successfully" });
  else {
    res.status(404);
    throw new Error("Car not deleted ");
  }
});

export { createCar, deleteCarById, updateCarById, getAllCars, getCarById };
