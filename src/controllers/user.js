import mysql from "../configs/database.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const { JWT_SECRET_KEY } = process.env;

const register = (req, res, next) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({
      status: 400,
      error: "missing body request",
    });
  }

  const queryCheckEmail = "SELECT * FROM users WHERE email = ?";
  const queryCheckUsername = "SELECT * FROM users WHERE username = ?";
  const queryInsert = "INSERT INTO users SET ?";

  const hashedPassword = bcrypt.hashSync(password, 10);

  mysql.query(queryCheckEmail, [email], (err, result) => {
    if (err) {
      return res.status(500).json({
        status: 500,
        error: err.name,
        message: err.message,
      });
    }

    if (result.length >= 1) {
      return res.status(400).json({
        status: 400,
        error: "email already exist",
        message: "email already exist",
      });
    }

    mysql.query(queryCheckUsername, [username], (err, result) => {
      if (err) {
        return res.status(500).json({
          status: 500,
          error: err.name,
          message: err.message,
        });
      }

      if (result.length >= 1) {
        return res.status(500).json({
          status: 400,
          error: "username already exist",
          message: "username already exist",
        });
      }

      mysql.query(
        queryInsert,
        { username, email, password: hashedPassword },
        (err) => {
          if (err) {
            return res.status(500).json({
              status: 500,
              error: err.name,
              message: err.message,
            });
          }

          return res.status(201).json({
            status: 201,
            message: "success create new user",
            data: null,
          });
        }
      );
    });
  });
};

const login = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      status: 400,
      error: "missing body request",
      message: "missing body request",
    });
  }

  const queryFindUser = "SELECT * FROM users WHERE email = ? LIMIT 1";
  mysql.query(queryFindUser, [email], (err, result) => {
    if (err) {
      return res.status(500).json({
        status: 500,
        error: err.name,
        message: err.message,
      });
    }

    if (result.length != 1) {
      return res.status(400).json({
        status: 400,
        error: "login failed",
        message: "email or password not matched",
      });
    }

    const { password: dbPassword, id: dbId, username: dbUsername } = result[0];

    const isMatched = bcrypt.compareSync(password, dbPassword);

    if (isMatched == false) {
      return res.status(400).json({
        status: 400,
        error: "login failed",
        message: "email or password not matched",
      });
    }

    const payload = { id: dbId, username: dbUsername };

    const token = jwt.sign(payload, JWT_SECRET_KEY);

    return res.status(200).json({
      status: 200,
      message: "login success",
      data: { token },
    });
  });
};

export default { register, login };
