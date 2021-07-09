require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
