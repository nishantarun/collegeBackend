import "./config/env.js";
import express from "express";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import { customMiddleware } from "./middlewares/customMiddleware.js";

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

// app.use(customMiddleware);

app.use("/users", userRoutes);
app.use("/products", productRoutes);

app.listen(PORT, () =>
  console.log(`Server running at: http://localhost:${PORT}`),
);
