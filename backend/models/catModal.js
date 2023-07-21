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

const Categories = mongoose.model("Category", catSchema);

export default Categories;
