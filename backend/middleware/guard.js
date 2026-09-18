const User = require("../models/User");
const { verifyToken } = require("../utils/token");

exports.guard = async (req, res, next) => {
  const header = req.headers.authorization || "";
  const token = header.startsWith("Bearer ") ? header.split(" ")[1] : null;

  if (!token) {
    return res.status(401).json({ error: "Missing token" });
  }

  let payload;
  try {
    payload = verifyToken(token);
  } catch (error) {
    return res.status(401).json({ error: "Invalid or expired token" });
  }

  const user = await User.findById(payload.sub);
  if (!user) {
    return res.status(401).json({ error: "User not found" });
  }

  req.user = user;
  next();
};
