const express = require("express");
const {
  accessChat,
  createGroupChat,
} = require("../../controller/chatController");
const { protect } = require("../../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, accessChat);
router.post("/group", protect, createGroupChat);

module.exports = router;
