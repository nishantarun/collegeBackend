import express from "express";
import { getAuthToken } from "../controllers/authController.js";

const router = express.Router();

router.get("/login", getAuthToken);

export default router;
