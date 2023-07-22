import mongoose from "mongoose";

const carSchema = mongoose.Schema(
  {
    carName: {
      type: String,
      required: true,
    },
    carColor: {
      type: String,
      required: true,
    },
    carModel: {
      type: String,
      required: true,
    },
    carRegNo: {
      type: String,
      trim: true,
    },
    carType: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Categories", // Referencing the Categories model
    },
  },
  {
    timestamps: true,
  }
);

const Car = mongoose.model("Car", carSchema);

export default Car;
