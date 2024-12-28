const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");
const validateRequest = require("../middlewares/vaidateRequest");
const userSchema = require("../validators/user/userRegister");
const userLoginSchema = require("../validators/user/userLogin");

router.post(
  "/register",
  validateRequest(userSchema),
  UserController.regsiterUser
);
router.post(
  "/login",
  validateRequest(userLoginSchema),
  UserController.loginUser
);

module.exports = router;
