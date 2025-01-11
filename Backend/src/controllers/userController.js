const UserServices = require("../services/userServices");
const asyncHandler = require("express-async-handler");

class UserController {
  static regsiterUser = asyncHandler(async (req, res) => {
    const result = await UserServices.regsiterUser(req, res);
    res.status(201).json(result);
  });
  static loginUser = asyncHandler(async (req, res) => {
    const result = await UserServices.loginUser(req, res);
    res.status(200).json(result);
  });
  static getUser = asyncHandler(async (req, res) => {
    res.status(200).json(req.user);
  });
  static logoutUser = asyncHandler(async (req, res) => {
    const result = await UserServices.logoutUser(req, res);
    res.status(200).json(result);
  });
}

module.exports = UserController;
