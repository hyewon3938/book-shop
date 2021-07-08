require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const config = require("./config/key.js");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
