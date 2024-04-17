const express = require("express");
const {
  accessChat,
  createGroupChat,
  renameGroupChat,
  addToGroup,
  removeFromGroup,
} = require("../../controller/chatController");
const { protect } = require("../../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, accessChat);
router.post("/group", protect, createGroupChat);
router.put("/rename", protect, renameGroupChat);
router.put("/groupadd", protect, addToGroup);
router.put("/groupremove", protect, removeFromGroup);

module.exports = router;
