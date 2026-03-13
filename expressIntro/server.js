import express from "express";
import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use("/", userRoutes);

app.listen(3000, () => console.log("Server running at: http://localhost:3000"));
