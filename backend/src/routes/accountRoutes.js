const express = require("express");

const authenticateToken =
  require("../middleware/authMiddleware");

const {
  getAccount
} = require("../controllers/accountController");

const router = express.Router();

router.get(
  "/accounts/:id",
  authenticateToken,
  getAccount
);

module.exports = router;