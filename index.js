const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv.config();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Welcome to the QuickNote API");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Listening on port" + port);
});
