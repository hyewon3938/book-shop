require("dotenv").config();
const express = require("express");
const path = require("path");

const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const newArrivalRoutes = require("./routes/newArrivalRoutes");
const recommendationRoutes = require("./routes/recommendationRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/newArrival", newArrivalRoutes);
app.use("/api/recommendation", recommendationRoutes);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

app.use(express.static(path.join(__dirname, "../client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});
