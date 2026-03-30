import "../config/env.js";
import jwt from "jsonwebtoken";

export const getAuthToken = (req, res) => {
  const username = req.username;
  const email = req.email;

  const token = jwt.sign({ username, email }, process.env.jwtSecretKey, {
    expiresIn: "1hr",
  });

  res.json({ token });
};
