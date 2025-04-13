require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require('../models/userModel');

module.exports.verifyToken = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: "Access denied. No token provided." });
    }
    const decoded = await jwt.verify(token, process.env.TOKEN_KEY);
    const user = await User.findById(decoded.id).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    req.user = user; 
    next();
  } catch (err) {
    console.error("authantication failed:", err);
    res.status(401).json({ success: false, message: "Server error" });
  }
};
