const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

dotenv.config();
app.use(express.json());
//allow OPTIONS on all resources
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', '*')
  next();
})

mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  () => {
    console.log("Db Connected");
  }
);

// Import routes
const authRoutes = require("./routes/authRoutes");
app.use("/api/user", authRoutes);
const noteRoutes = require("./routes/noteRoutes");
app.use("/api/notes", noteRoutes);

app.get("/", (req, res) => {
  res.status(200).send("Welcome to the QuickNote API");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Listening on port" + port);
});
