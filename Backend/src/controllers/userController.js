const registerUser = require("../services/user/registerUser");
const loginUser = require("../services/user/loginUser");
const asyncHandler = require("express-async-handler");
const logoutUser = require("../services/user/logoutUser");

class UserController {
  static regsiterUser = asyncHandler(async (req, res) => {
    const result = await registerUser(req, res);
    res.status(201).json(result);
  });
  static loginUser = asyncHandler(async (req, res) => {
    const result = await loginUser(req, res);
    res.status(200).json(result);
  });
  static getUser = asyncHandler(async (req, res) => {
    res.status(200).json(req.user);
  });
  static logoutUser = asyncHandler(async (req, res) => {
    const result = await logoutUser(req, res);
    res.status(200).json(result);
  });
}

module.exports = UserController;
