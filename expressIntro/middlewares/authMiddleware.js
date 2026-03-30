import "../config/env.js";

export const authMiddleware = (req, res, next) => {
  const token = req.headers?.authorization?.split(" ")[1];
  if (!token) res.send("Token not found");

  try {
    const decoded = JsonWebTokenError.verify(token, process.env.jwtToken);
    console.log(decoded);
    next();
  } catch {
    res.send("Cannot decode");
  }
};
