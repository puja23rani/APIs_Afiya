import mongoose from "mongoose";

const homeSchema = new mongoose.Schema({
  home: {
    header: String,
    paragraph: String,
    banner: String,
  },

  aboutUs: {
    header: String,
    paragraph: String,
  },

  bestDishes: {
    paragraph: String,
  },

  social_media: {
    fb: String,
    insta: String,
    twitter: String,
    google: String,
  },

  contact_number: {
    type: String,
    required: true,
  },
  opening_time: {
    type: String,
    require: true,
  },
  closing_time: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  mail: {
    type: String,
    required: true,
  },
});

export default mongoose.model("home", homeSchema);
