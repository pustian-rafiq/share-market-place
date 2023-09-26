const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;
require("dotenv").config();
const dbConnect = require("./src/config/dbConfig");

// Import routes
const authRoutes = require("./src/routes/authRoutes");

dbConnect();

// app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "*",
  })
);

// Use routes
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is ruuning on port ${PORT}`);
});
