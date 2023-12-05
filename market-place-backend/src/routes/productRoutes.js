const {
  addProduct,
  getProducts,
  getProduct,
  editProduct,
  deleteProduct,
} = require("../controllers/productController");
const { authMiddleware } = require("../middlewares/authMiddleware");

const router = require("express").Router();

router.post("/add", authMiddleware, addProduct);
router.put("/edit/:id", authMiddleware, editProduct);
router.get("/", authMiddleware, getProducts);
router.get("/:id", authMiddleware, getProduct);
router.delete("/:id", authMiddleware, deleteProduct);

module.exports = router;
