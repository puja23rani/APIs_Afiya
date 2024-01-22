import mongoose from "mongoose";

const tokenSchema = new mongoose.Schema({
  token_name: {
    type: String,
    required: true,
  },
});

export default mongoose.model("tokens", tokenSchema);
