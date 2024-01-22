import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./database/connection.js";

import category from "./model/category.js";
import typeFood from "./model/typeFood.js";
import item from "./model/item.js";
import route from "./route/catRoute.js";
import routeType from "./route/typeRoute.js";
import bodyparser from "body-parser";
import cors from "cors";
import routeItem from "./route/itemRoute.js";
import home_content from "./model/home_content.js";
import routehome from "./route/homeRoute.js";
import routeReview from "./route/reviewRoute.js";
import review from "./model/review.js";
import orders from "./model/orders.js";
import routeOrder from "./route/orderRoute.js";
import token from "./model/token.js";
import routeToken from "./route/tokenRoute.js";
import "fcm-node";
dotenv.config();
const app = express();
connectDB();
const userSchema = orders.schema;
app.use(cors());

console.log(userSchema.obj);
const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.send("Hello world!");
});
app.use(bodyparser.json());
app.use(route);
app.use(routeType);
app.use(routeItem);
app.use(routehome);
app.use(routeReview);
app.use(routeToken);
app.use(routeOrder);
app.listen(port, () => {
  console.log(`Listening to port${port}`);
});
