import users from "../modules/userModule.js";

export const getUsers = (req, res) => {
  res.json(users);
};

export const getUserById = (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((user) => user.id === id);
  if (!user) {
    return res.json({ message: "User not found" });
  }
  res.json(user);
};
