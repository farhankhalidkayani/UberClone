const Captain = require("../models/captainModel");
const blackList = require("../models/blacklistTokenModel");
class CaptainServices {
  static registerCaptain = async (req, res) => {
    const exists = await Captain.find({ email: req.body.email });
    if (exists.length !== 0) {
      res.status(400);
      throw new Error("Captain already exists");
    }

    const newCaptain = await Captain.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: await Captain.hashPassword(req.body.password),
      vehicle: req.body.vehicle,
    });
    const token = newCaptain.createJwtToken();
    return { newCaptain, token };
  };
  static loginCaptain = async (req, res) => {
    const captain = await Captain.findOne({ email: req.body.email });
    if (!captain) {
      res.status(400);
      throw new Error("Invalid Credentials");
    }
    const match = await captain.comparePassword(req.body.password);
    if (!match) {
      res.status(400);
      throw new Error("Invalid Credentials");
    }
    const token = await captain.createJwtToken();
    return { captain, token };
  };
  static logoutCaptain = async (req, res) => {
    const token = req.headers.authorization.split(" ")[1];
    await blackList.create({ token });
  };

  static getCaptainProfile = async (req, res) => {
    return req.user;
  };
}
module.exports = CaptainServices;
