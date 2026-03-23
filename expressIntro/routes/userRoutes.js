import express from "express";
import { getUsers, getUserById } from "../controllers/userController.js";

const route = express.Router();

route.get("/getUser", getUsers);
route.get("/getUser/:id", getUserById);

export default route;
