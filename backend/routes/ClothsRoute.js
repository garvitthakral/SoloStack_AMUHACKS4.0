const { getAllCloths, createCloth } = require("../controllers/clothController");
const { verifyToken } = require("../middleware/authMiddleware");
const router = require("express").Router();

router.post("/createcloth", verifyToken, createCloth);
router.get("/allcloths", getAllCloths);

module.exports = router;
