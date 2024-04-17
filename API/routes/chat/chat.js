const express = require("express");
const {
  accessChat,
  createGroupChat,
  renameGroupChat,
} = require("../../controller/chatController");
const { protect } = require("../../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, accessChat);
router.post("/group", protect, createGroupChat);
router.put("/rename", protect, renameGroupChat);

module.exports = router;
