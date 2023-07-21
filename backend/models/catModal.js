import mongoose from "mongoose";

const catSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Categories = mongoose.model("User", catSchema);

export default Categories;
