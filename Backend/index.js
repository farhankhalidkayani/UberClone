const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connect = require("./src/db/connect");
const userRoutes = require("./src/routes/userRoutes");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

connect();

app.use("/user", userRoutes);

app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log(`Error while listening : ${err}`);
  } else {
    console.log(`Listening at PORT : ${process.env.PORT}`);
  }
});
