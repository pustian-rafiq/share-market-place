const {
  getUserController,
  getLoggedUserController,
} = require("../controllers/userController");
const { authMiddleware } = require("../middlewares/authMiddleware");

const router = require("express").Router();

router.get("/loggedin", authMiddleware, getLoggedUserController);
router.get("/:id", getUserController);

module.exports = router;
