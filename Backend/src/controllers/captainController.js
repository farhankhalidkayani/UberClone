const asyncHandler = require("express-async-handler");
const CaptainServices = require("../services/captainServices");

class CaptainController {
  static registerCaptain = asyncHandler(async (req, res) => {
    const captain = await CaptainServices.registerCaptain(req, res);
    res.status(201).json(captain);
  });
  static loginCaptain = asyncHandler(async (req, res) => {
    const captain = await CaptainServices.loginCaptain(req, res);
    res.status(200).json(captain);
  });
  static logoutCaptain = asyncHandler(async (req, res) => {
    await CaptainServices.logoutCaptain(req, res);
    res.status(200).json({ message: "Logged out" });
  });
  static getCaptainProfile = asyncHandler(async (req, res) => {
    const captain = await CaptainServices.getCaptainProfile(req, res);
    res.status(200).json(captain);
  });
}

module.exports = CaptainController;
