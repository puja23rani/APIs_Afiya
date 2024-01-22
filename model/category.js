import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      require: true,
    },
    slug: {
      type: String,
      require: true,
    },
  },
  { timestamp: true }
);

export default mongoose.model("categories", categorySchema);
