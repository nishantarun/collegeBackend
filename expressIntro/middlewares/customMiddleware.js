export const customMiddleware = (req, res, next) => {
  console.log("Custom Middleware Running...");
  next();
};
