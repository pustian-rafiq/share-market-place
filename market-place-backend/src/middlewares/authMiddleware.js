const User = require("../models/user");
const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  let token;
  if (req.headers?.authorization?.startsWith("Bearer")) {
    token = req.headers?.authorization?.split(" ")[1];
    try {
      if (token) {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
        console.log(decodedToken);
        const user = await User.findById(decodedToken?.userId);
        req.user = user;
        next();
      }
    } catch (error) {
      res.send({
        success: false,
        message: error.message,
      });
    }
  } else {
    res.send({
      success: false,
      message: "There is no authorization token. Pleae login first",
    });
  }
};

module.exports = {
  authMiddleware,
};
