const {
  addProduct,
  getProducts,
  getProduct,
} = require("../controllers/productController");
const { authMiddleware } = require("../middlewares/authMiddleware");

const router = require("express").Router();

router.post("/add", authMiddleware, addProduct);
router.get("/", authMiddleware, getProducts);
router.get("/:id", authMiddleware, getProduct);

module.exports = router;
