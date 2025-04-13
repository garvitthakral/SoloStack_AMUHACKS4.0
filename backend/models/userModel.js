const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      enum: ["user", "donor"],
      default: "user",
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

UserSchema.pre("save", async function() {
    this.password = await bcrypt.hash(this.password, 12);
});

module.exports = mongoose.model("User", UserSchema);