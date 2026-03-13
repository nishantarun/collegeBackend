import express from "express";

import { getUserById, getUsers } from "../controllers/userController.js";

const route = express.Router();

route.get("/get/users", getUsers);
route.get("/get/users/:id", getUserById);

export default route;
