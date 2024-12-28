const app = require("./app");
require("dotenv").config();

app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log(`Error while listening : ${err}`);
  } else {
    console.log(`Listening at PORT : ${process.env.PORT}`);
  }
});
