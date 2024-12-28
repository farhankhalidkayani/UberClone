const registerUser = require("../services/registerUser");
const loginUser = require("../services/loginUser");
const asyncHandler = require("express-async-handler");

class UserController {
  static regsiterUser = asyncHandler(async (req, res) => {
    const result = await registerUser(req, res);
    res.status(201).json(result);
  });
  static loginUser = asyncHandler(async (req, res) => {
    const result = await loginUser(req, res);
    res.status(200).json(result);
  });
}

module.exports = UserController;
