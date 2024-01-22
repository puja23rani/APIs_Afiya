import express from "express";

import {
  createType,
  deleteType,
  getAlltypes,
  getoneType,
  updateType,
} from "../controller/typeController.js";

const routeType = express.Router();

routeType.post("/create-type", createType);
routeType.get("/all-type", getAlltypes);
routeType.post("/update-type", updateType);
routeType.post("/delete-type", deleteType);
routeType.post("/get-oneType", getoneType);
export default routeType;
