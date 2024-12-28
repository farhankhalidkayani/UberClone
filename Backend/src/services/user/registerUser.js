const User = require("../../models/userModel");

const regsiterUser = async (req, res) => {
  try {
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
  } catch (err) {
    res.status(400);
    throw new Error(err.message);
  }
};

module.exports = regsiterUser;
