import express from "express";
import {
  createhome,
  gethomeInfo,
  updateInfo,
} from "../controller/homeController.js";

const routehome = express.Router();

routehome.post("/create-home", createhome);
// routehome.post("/delete-item", deleteItem);
routehome.post("/update-home", updateInfo);
routehome.get("/homeInfo", gethomeInfo);
// routehome.post("/get-item", getoneItem);
export default routehome;
