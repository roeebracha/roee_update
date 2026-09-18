const jwt = require("jsonwebtoken");

exports.signToken = (user) =>
  jwt.sign({ sub: String(user._id) }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || "7d",
  });

exports.verifyToken = (token) => jwt.verify(token, process.env.JWT_SECRET);
