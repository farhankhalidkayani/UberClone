const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");
const validateRequest = require("../middlewares/vaidateRequest");
const userSchema = require("../validators/user/userRegister");
const userLoginSchema = require("../validators/user/userLogin");
const authenticateToken = require("../middlewares/authentication");

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
router.get("/me", authenticateToken, UserController.getUser);
router.post("/logout", authenticateToken, UserController.logoutUser);

module.exports = router;
