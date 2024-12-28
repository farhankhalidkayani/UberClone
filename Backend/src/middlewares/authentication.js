const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const User = require("../models/userModel");
const BlacklistToken = require("../models/blacklistTokenModel");

const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res.status(401).json({ message: "Authorization header is missing" });
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Token is missing" });
  }

  const blacklistedToken = await BlacklistToken.findOne({ token });
  if (blacklistedToken) {
    return res.status(403).json({ message: "Token is blacklisted" });
  }

  jwt.verify(token, process.env.JWT_SECRET, async (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Token is invalid or expired" });
    }
    req.user = await User.findById(user.id).select("-password");
    next();
  });
};

module.exports = authenticateToken;
