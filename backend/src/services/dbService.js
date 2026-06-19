const pool = require("../database/mysql");

const getUserByUsername = async (username) => {
  const [rows] = await pool.execute(
    `
      SELECT *
      FROM users
      WHERE username = ?
    `,
    [username]
  );

  return rows[0];
};



const getAccountById = async (id) => {
  const [rows] = await pool.execute(
    `
      SELECT *
      FROM accounts
      WHERE id = ?
    `,
    [id]
  );

  return rows[0];
};

const getTransactionsByAccountId = async (accountId) => {
  const [rows] = await pool.execute(
    `
      SELECT *
      FROM transactions
      WHERE account_id = ?
      ORDER BY created_at DESC
    `,
    [accountId]
  );

  return rows;
};

const getAccountByIdAndUserId = async (
  accountId,
  userId
) => {
  const [rows] = await pool.execute(
    `
      SELECT *
      FROM accounts
      WHERE id = ?
      AND user_id = ?
    `,
    [accountId, userId]
  );

  return rows[0];
};

module.exports = {
  getUserByUsername,
  getAccountById,
  getTransactionsByAccountId,
  getAccountByIdAndUserId
};