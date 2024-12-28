const express = require("express");
const cors = require("cors");
const connect = require("./src/db/connect");
const userRoutes = require("./src/routes/userRoutes");
const globalErrorHandler = require("./src/middlewares/globalErrorHandler");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

connect();

app.use("/user", userRoutes);
app.use("*", (req, res) => {
  res.status(404).json({ message: "Invalid URL" });
});
app.use(globalErrorHandler);
module.exports = app;
