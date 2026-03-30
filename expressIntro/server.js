import "./config/env.js";
import express from "express";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import { authMiddleware } from "./middlewares/authMiddleware.js";

const PORT = process.env.PORT;

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home");
});

app.use(express.json());
app.use(authMiddleware);

app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/auth", authRoutes);

app.listen(PORT, () =>
  console.log(`Server running at: http://localhost:${PORT}`),
);
