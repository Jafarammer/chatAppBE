const express = require("express");
const { allUser } = require("../../controller/userController");
const { protect } = require("../../middleware/authMiddleware");

const router = express.Router();

router.get("/", protect, allUser);

module.exports = router;
