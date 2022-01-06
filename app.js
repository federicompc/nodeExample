const express = require("express");
const app = express();
const character = require("./routes/apiRoutes");
const AppError = require("./utils/error");

app.use(express.json());

app.use("/api/v1/character", character);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode).json({
    message: err.message,
  });
});

module.exports = app;
