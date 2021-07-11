require("dotenv").config();
const express = require("express");
const path = require("path");

const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

app.use(express.static(path.join(__dirname, "../client/build")));

let protected = ["transformed.js"];

app.get("*", (req, res) => {
  // res.sendFile(path.join(__dirname + "../client/build/index.html"));

  let path = req.params["0"].substring(1);

  if (protected.includes(path)) {
    // Return the actual file
    res.sendFile(`${__dirname}/build/${path}`);
  } else {
    // Otherwise, redirect to /build/index.html
    res.sendFile(`${__dirname}/build/index.html`);
  }
});
