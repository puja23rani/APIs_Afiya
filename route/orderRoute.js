import express from "express";

import {
  createOrder,
  deleteOrder,
  getOrder,
  getoneOrder,
} from "../controller/orderController.js";

const routeOrder = express.Router();

routeOrder.post("/create-order", createOrder);
routeOrder.get("/all-order", getOrder);
routeOrder.post("/delete-order", deleteOrder);
routeOrder.post("/get-order", getoneOrder);
export default routeOrder;
