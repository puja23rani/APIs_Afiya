import express from "express";
import {
  createCat,
  deleteCat,
  getCategories,
  getoneCategory,
  updateCat,
} from "../controller/categoryCreate.js";

const route = express.Router();

route.post("/api/create-cat", createCat);
route.post("/delete-cat", deleteCat);
route.post("/update-cat", updateCat);
route.get("/all-cat", getCategories);
route.post("/get-one", getoneCategory);
export default route;
