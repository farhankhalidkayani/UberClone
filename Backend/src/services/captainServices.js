const Captain = require("../models/captainModel");
const blackList = require("../models/blackListModel");
class CaptainServices {
  static registerCaptain = async (req, res) => {
    const exists = await Captain.find({ email: req.body.email });
    if (exists.length) {
      res.status(400);
      throw new Error("Captain already exists");
    }

    const newCaptain = await Captain.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: await Captain.hashPassword(req.body.password),
      vehicle: {
        color: req.body.color,
        plate: req.body.plate,
        capacity: req.body.capacity,
        vehicleType: req.body.vehicleType,
      },
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
    const captain = await Captain.findById(req.user._id);
    if (!captain) {
      res.status(404);
      throw new Error("Captain not found");
    }
    return captain;
  };
}
module.exports = CaptainServices;
