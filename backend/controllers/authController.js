const  User  = require("../models/userModel");
const { createSecretToken } = require("../util/secretToken");
const bcrypt = require("bcrypt");

module.exports.Signup = async (req, res, next) => {
  try {
    const { email, password, name, role } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const exsitingUser = await User.findOne({ email });
    if (exsitingUser) {
      return res.status(409).json({
        success: false,
        message: "user with this email already exists",
      });
    }
    const user = await User.create({ email, password, name, role });
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
      path: "/",secure: false,
  sameSite: "Lax"
    });
    res
      .status(201)
      .json({
        success: true,
        message: `user created with ${user.email}`,
        redirect: "/",
      });
    next();
  } catch (err) {
    console.error("Signup Error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

module.exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({ message: "All feilds are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Incorrect Username or Password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ message: "Incorrect Username or Password" });
    }
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
      maxAge: 7 * 24 * 60 * 60 * 1000,
      path: "/",
    });
    res
      .status(201)
      .json({
        message: "User Logged in Successfully",
        success: true, user,
        redirect: "/",
      });
  } catch (error) {
    console.error(error);
  }
};
