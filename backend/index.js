require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const authRoute = require("./routes/AuthRoute");
const cookieParser = require("cookie-parser");

const PORT = process.env.PORT || 3002;
const URL = process.env.MONGO_URL;

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use("/", authRoute);
app.use(
  cors({
    origin: [""],
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
