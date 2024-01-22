import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  item: [
    {
      name: String,
      slug: String,
      images: [String],
      thumbnail: String,
      categories: [String],
      types: [String],
      isCheck: Boolean,
      mrp: String,
      salesprice: String,
      quantity: [String],
      varient: [
        {
          name: String,
          mrp: String,
          salesprice: String,
        },
      ],
    },
  ],

  user_info: {
    name: String,
    contact: String,
    address: String,
    time: String,
    date: String,
  },
});

export default mongoose.model("orders", orderSchema);
