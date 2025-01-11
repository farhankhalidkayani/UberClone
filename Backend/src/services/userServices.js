const User = require("../models/userModel");
const blacklistTokenModel = require("../models/blacklistTokenModel");

class UserServices {
  static regsiterUser = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    const exists = await User.find({ email });
    if (exists.length) {
      res.status(400);
      throw new Error("User already exists");
    }
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: await User.hashPassword(password),
    });
    return { user, token: user.createJwtToken() };
  };

  static logoutUser = async (req, res) => {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.status(400).json({ message: "Token is required" });
    }

    // Add the token to the blacklist
    await blacklistTokenModel.create({ token });

    return res.status(200).json({ message: "Logout successful" });
  };

  static loginUser = async (req, res) => {
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
  };
}

module.exports = UserServices;
