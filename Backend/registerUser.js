const User = require("./src/models/userModel");

const regsiterUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
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
