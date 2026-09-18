const User = require("../models/User");

exports.getUsers = async (req, res) => {
  const users = await User.find().select("name email createdAt").sort({ createdAt: -1 });
  res.json({ users });
};
