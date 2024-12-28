const express = require("express");
const router = express.Router();
const { regsiterUser } = require("../controllers/userController");
const validateRequest = require("../middlewares/vaidateRequest");
const userSchema = require("../validators/user/userRegister");

router.post("/register", validateRequest(userSchema), regsiterUser);

module.exports = router;
