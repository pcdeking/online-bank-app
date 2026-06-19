const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");

const profileRoutes =
  require("./routes/profileRoutes");

const accountRoutes =
  require("./routes/accountRoutes");  

const transactionRoutes =
  require("./routes/transactionRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "UP"
  });
});

app.use("/api", authRoutes);
app.use("/api", profileRoutes);
app.use("/api", accountRoutes);
app.use("/api", transactionRoutes);

module.exports = app;