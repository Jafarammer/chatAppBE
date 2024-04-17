const express = require("express");
const app = express();
const userRoutes = require("./API/routes/user/user");
const findUser = require("./API/routes/user/find");
const chatRoutes = require("./API/routes/chat/chat");
const findChat = require("./API/routes/chat/find");
const { notFound, errorHandler } = require("./API/middleware/errorHandling");

app.use(express.json());

// user routes
app.use("/user", userRoutes);
app.use("/user", findUser);
// chat routes
app.use("/chat", chatRoutes);
app.use("/chat", findChat);
app.use(notFound);
app.use(errorHandler);

module.exports = app;
