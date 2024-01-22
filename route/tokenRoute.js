import express from "express";
import { createToken, getToken } from "../controller/tokenControlller.js";

const routeToken = express.Router();

routeToken.post("/create-token", createToken);
routeToken.get("/getToken", getToken);

export default routeToken;
