import jwt from "jsonwebtoken";
import mysql from "../configs/database.js";

const { JWT_SECRET_KEY } = process.env;

const authenticate = (req, res, next) => {
  const token = req.headers["authorization"];
  console.log(token);
  if (!token) {
    return res.status(401).json({
      status: 401,
      error: "unauthorized user",
      message: "login required",
    });
  }

  jwt.verify(token, JWT_SECRET_KEY, (err, decode) => {
    if (err) {
      const message = err.message == "jwt expired" ? "token expired" : err.message;
      return res.status(401).json({
        status: 401,
        error: message,
      });
    }

    mysql.query("SELECT * FROM users WHERE id = ?", [decode.id], (err, result) => {
      if (err) {
        return res.status(500).json({
          status: 500,
          error: err.name,
          message: err.message,
        });
      }

      req.user = {
        id: decode.id,
        username: decode.username,
      };
    });

    next();
  });
};

export default { authenticate };
