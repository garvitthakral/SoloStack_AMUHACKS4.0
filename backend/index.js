require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const authRoute = require("./routes/AuthRoute");
const cookieParser = require("cookie-parser");
const clothRoutes = require("./routes/ClothsRoute");
const bcrypt = require("bcrypt");

const PORT = process.env.PORT || 3002;
const URL = process.env.MONGO_URL;

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use("/", authRoute);
app.use("/cloths", clothRoutes);
app.use(
  cors({
    origin: ["http://localhost:5173/"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

mongoose
  .connect(URL)
  .then(() => {
    console.log("Connected to Database");

    app.listen(PORT, () => {
      console.log(`App is listening on PORT ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database connection failed:", err);
  });

app.post("/logout", (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(400).json({ success: false, message: "No token found" });
  }

  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "None",
    secure: process.env.NODE_ENV === "production",
  });
  res
    .status(200)
    .json({
      success: true,
      message: "cookie 'token' removed & Logged out successfully",
    });
});
