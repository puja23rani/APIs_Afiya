import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
    require: true,
  },
  thumbnail: {
    type: String,
    require: true,
  },
  categories: {
    type: [String],
    require: true,
  },
  types: {
    type: [String],
    require: true,
  },
  isCheck: {
    type: Boolean,
    require: true,
  },
  mrp: {
    type: String,
  },
  salesprice: {
    type: String,
  },
  varient: [
    {
      // Define the structure of each object within the array
      name: String,
      mrp: String,
      salesprice: String,
      // Add other fields as needed
    },
  ],
});

export default mongoose.model("items", itemSchema);
