const User = require("../models/userModel");

const regsiterUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: await User.hashPassword(password),
    });
    res.status(201).json({ user, token: user.createJwtToken() });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { regsiterUser };
