import mongoose from "mongoose";
const typeSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  icon: { type: String, require: true },
});
export default mongoose.model("Type", typeSchema);
