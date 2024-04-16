const express = require("express");
const app = express();
const userRoutes = require("./API/routes/user/user");
const findUser = require("./API/routes/user/find");
const { notFound, errorHandler } = require("./API/middleware/errorHandling");

app.use(express.json());

// user routes
app.use("/user", userRoutes);
app.use("/user", findUser);
app.use(notFound);
app.use(errorHandler);

module.exports = app;
