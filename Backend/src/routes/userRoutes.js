const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");
const validateRequest = require("../middlewares/vaidateRequest");
const userSchema = require("../validators/user/userRegister");

router.post(
  "/register",
  validateRequest(userSchema),
  UserController.regsiterUser
);

module.exports = router;
