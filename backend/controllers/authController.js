const { UserModel } = require("../models/userModel");
const { createSecretToken } = require("../util/secretToken");

module.exports.Signup = async (req, res, next) => {
  try {
    const { email, password, name, role } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const exsitingUser = await UserModel.findOne({ email });
    if (exsitingUser) {
      return res.status(409).json({
        success: false,
        message: "user with this email already exists",
      });
    }
    const user = await UserModel.create({ email, password, name, role });
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ success: true, message: `user created with ${user.email}` });
    next();
  } catch (err) {
    console.error("Signup Error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
