import express from "express";
import {
  createReview,
  deleteReview,
  getReview,
  getoneReview,
  updateReview,
} from "../controller/reviewController.js";

const routeReview = express.Router();

routeReview.post("/create-review", createReview);
routeReview.post("/delete-review", deleteReview);
routeReview.post("/update-review", updateReview);
routeReview.get("/getReview", getReview);
routeReview.post("/getOne-review", getoneReview);
export default routeReview;
