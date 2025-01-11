const express = require("express");
const CaptainController = require("../controllers/captainController");
const validateRequest = require("../middlewares/vaidateRequest");
const registerSchema = require("../validators/captain/captainRegister");
const loginSchema = require("../validators/captain/captainLogin");
const authenticate = require("../middlewares/authentication");

const router = express.Router();

router.post(
  "/register",
  validateRequest(registerSchema),
  CaptainController.registerCaptain
);
router.post(
  "/login",
  validateRequest(loginSchema),
  CaptainController.loginCaptain
);
router.post("/logout", authenticate, CaptainController.logoutCaptain);
router.get("/profile", authenticate, CaptainController.getCaptainProfile);

module.exports = router;
