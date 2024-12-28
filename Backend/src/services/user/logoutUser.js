const blacklistTokenModel = require("../../models/blacklistTokenModel");

const logoutUser = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.status(400).json({ message: "Token is required" });
    }

    // Add the token to the blacklist
    await blacklistTokenModel.create({ token });

    return res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};

module.exports = logoutUser;
