const { getAllCloths, createCloth, getACloth, DeleteCloth } = require("../controllers/clothController");
const { verifyToken } = require("../middleware/authMiddleware");
const router = require("express").Router();

router.get("/", getAllCloths);
router.get("/:id", getACloth);
router.post("/", verifyToken, createCloth);
router.delete("/:id", verifyToken, DeleteCloth);

module.exports = router;
