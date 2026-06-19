const express = require("express");

const authenticateToken =
  require("../middleware/authMiddleware");

const {
  getTransactions
} = require(
  "../controllers/transactionController"
);

const router = express.Router();

router.get(
  "/accounts/:accountId/transactions",
  authenticateToken,
  getTransactions
);

module.exports = router;