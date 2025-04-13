const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middleware/authMiddleware");
const User = require("../models/userModel");

router.patch("/become-donor", verifyToken, async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.user._id,
      { role: "donor" },
      { new: true }
    );

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    res.status(200).json({
      success: true,
      message: "You are now a verified donor",
      user,
    });
  } catch (err) {
    console.error("Become Donor Error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

router.get("/me", verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (err) {
    console.error("Get User Error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

module.exports = router;
