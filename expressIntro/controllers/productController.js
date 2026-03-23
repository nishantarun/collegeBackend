import products from "../modules/productModule.js";

export const getProducts = (req, res) => {
  res.json(products);
};
