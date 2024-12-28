const registerUser = require("../../registerUser");
const asyncHandler = require("express-async-handler");

class UserController {
  static regsiterUser = asyncHandler(async (req, res) => {
    const result = await registerUser(req, res);
    res.status(201).json(result);
  });
}

module.exports = UserController;
