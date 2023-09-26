const bcrypt = require("bcrypt");
const User = require("../models/user");
const { generateToken } = require("../utils/generateToken");
// Register  the user
const registerController = async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    // Check if the user is already registered
    const user = await User.findOne({ email });

    if (user) {
      throw new Error("User already registered");
    }

    // Hash the password
    const generatedSalt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, generatedSalt);
    req.body.password = hashedPassword;

    // save the user
    const newUser = new User(req.body);
    await newUser.save();
    res.send({
      success: true,
      message: "User regiserted successfully",
    });
  } catch (err) {
    res.send({
      success: false,
      message: err.message,
    });
  }
};

// Login a user
const loginController = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    // Check if the user is already registered
    const user = await User.findOne({ email });

    if (!user) {
      throw new Error("User not found");
    }
    console.log("user", user);
    // Compare password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      throw new Error("Email or password is not valid");
    }

    res.send({
      success: true,
      message: "User login successfully",
      data: {
        ...user?._doc,
        token: generateToken(user?._id),
      },
    });
  } catch (err) {
    res.send({
      success: false,
      message: err.message,
    });
  }
};

module.exports = {
  registerController,
  loginController,
};
