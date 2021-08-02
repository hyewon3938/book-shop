require("dotenv").config();
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db");

const productRoutes = require("./routes/productRoutes");
const newArrivalRoutes = require("./routes/newArrivalRoutes");
const recommendationRoutes = require("./routes/recommendationRoutes");
const adRoutes = require("./routes/adRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/products", productRoutes);
app.use("/api/newArrival", newArrivalRoutes);
app.use("/api/recommendation", recommendationRoutes);
app.use("/api/ad", adRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

app.use(express.static(path.join(__dirname, "../client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});
