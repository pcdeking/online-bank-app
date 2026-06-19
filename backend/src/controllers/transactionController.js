const {
  getAccountByIdAndUserId,
  getTransactionsByAccountId
} = require("../services/dbService");

const getTransactions = async (req, res) => {
  try {

    const account =
      await getAccountByIdAndUserId(
        req.params.accountId,
        req.user.userId
      );

    if (!account) {
      return res.status(403).json({
        message:
          "You are not authorized to access these transactions"
      });
    }

    const transactions =
      await getTransactionsByAccountId(
        req.params.accountId
      );

    return res.status(200).json(
      transactions
    );

  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};

module.exports = {
  getTransactions
};