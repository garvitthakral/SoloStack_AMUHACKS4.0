const { Signup, Login } = require("../controllers/authController");
const { verifyToken } = require("../middleware/authMiddleware");
const router = require("express").Router();
const bcrypt = require("bcrypt");

router.post("/signup", Signup);
router.post("/login", Login);

module.exports = router;