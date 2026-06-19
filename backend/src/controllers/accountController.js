const {
  getAccountByIdAndUserId
} = require("../services/dbService");

const getAccount = async (req, res) => {
  try {
    const account =
      await getAccountByIdAndUserId(req.params.id, req.user.userId);

    if (!account) {
      return res.status(403).json({
        message: "You are not authorized to access this account"
      });
    }

    return res.status(200).json(account);

  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};

module.exports = {
  getAccount
};