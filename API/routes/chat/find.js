const express = require("express");
const { fetchChats } = require("../../controller/chatController");
const { protect } = require("../../middleware/authMiddleware");

const router = express.Router();

router.get("/", protect, fetchChats);

module.exports = router;
