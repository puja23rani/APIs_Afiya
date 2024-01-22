import express from "express";
import {
  createItem,
  deleteItem,
  getItems,
  getoneItem,
  updateItems,
} from "../controller/itemController.js";

const routeItem = express.Router();

routeItem.post("/create-item", createItem);
routeItem.post("/delete-item", deleteItem);
routeItem.post("/update-item", updateItems);
routeItem.get("/all-item", getItems);
routeItem.post("/get-item", getoneItem);
export default routeItem;
