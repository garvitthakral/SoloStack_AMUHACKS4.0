const { Signup } = require("../controllers/authController");
const { verifyToken } = require("../middleware/authMiddleware");
const router = require("express").Router();

router.post("/signup", Signup);

module.exports = router;