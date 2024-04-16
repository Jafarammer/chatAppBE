const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const cors = require("cors");
const connectDB = require("./config/db");
dotenv.config();
const PORT = process.env.PORT || 5000;
const server = express();
const app = require("./app");

const corsOptions = {
  origins: ["http://localhost:3000"],
};

connectDB();
server.use(cors(corsOptions));
server.use("/", app);

server.listen(PORT, console.log(`Server started on PORT ${PORT}`.yellow.bold));
