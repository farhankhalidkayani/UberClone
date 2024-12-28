const User = require("../../models/userModel");
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      res.status(400);
      throw new Error("User not found");
    }

    // Check if password matches
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      res.status(400);
      throw new Error("Invalid credentials");
    }

    // Generate JWT token
    const token = user.createJwtToken();

    return { user, token };
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = loginUser;
