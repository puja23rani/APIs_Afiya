import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  paragraph: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    require: true,
  },
  rating: {
    type: String,
    require: true,
  },
});

export default mongoose.model("review", reviewSchema);
