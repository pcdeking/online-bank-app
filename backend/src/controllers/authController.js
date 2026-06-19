const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const {
  getUserByUsername
} = require("../services/dbService");

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user =
  await getUserByUsername(username);

    if (!user) {
      return res.status(401).json({
        message: "Invalid credentials"
      });
    }

    const validPassword =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!validPassword) {
      return res.status(401).json({
        message: "Invalid credentials"
      });
    }

    const token = jwt.sign(
      {
        userId: user.id,
        username: user.username
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h"
      }
    );

    return res.status(200).json({
      token
    });

  } catch (error) {

  return res.status(500).json({
    message: error.message
  });
}
};

module.exports = {
  login
};