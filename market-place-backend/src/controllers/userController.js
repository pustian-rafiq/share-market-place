const User = require("../models/user");

// Get logged in user
const getLoggedUserController = async (req, res, next) => {
  const user = req.user;

  if (user) {
    res.send({
      success: true,
      message: "Loggedin user fetch successfully",
      user,
    });
  } else {
    res.send({
      success: false,
      message: "Loggedin user not fetch",
    });
  }
};

// Get single user
const getUserController = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id).select("-password");
    res.status(200).json({
      status: "success",
      message: "User is fetched successfully",
      user,
    });
  } catch (error) {
    res.status(200).json({
      success: true,
      message: "User is not found",
    });
  }
};

module.exports = {
  getUserController,
  getLoggedUserController,
};
