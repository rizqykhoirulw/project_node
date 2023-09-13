import mysql from "mysql";
import dotenv from "dotenv";
dotenv.config();

const { DB_PORT, DB_HOST, DB_PASSWORD, DB_NAME, DB_USER } = process.env;

const connection = mysql.createConnection({
  port: DB_PORT,
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

connection.connect((err) => {
  if (err) {
    console.error("error connecting", err.message);
    return;
  }

  console.log("success connected to database as id: ", connection.threadId);
});

connection.query(
  `CREATE TABLE IF NOT EXISTS users (
    id SERIAL auto_increment,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    primary key (id)
);`,
  (error, results, fields) => {
    if (error) throw error;
  }
);

connection.query(
  `CREATE TABLE IF NOT EXISTS contents (
    id SERIAL auto_increment,
    user_id INT(16) NOT NULL,
    judul VARCHAR(255) NOT NULL,
    deskripsi TEXT NOT NULL,
    lokasi VARCHAR(255) NOT NULL,
    fasilitas VARCHAR(255) NOT NULL,
    foto VARCHAR(255) NOT NULL,
    primary key (id)
);`,
  (error, results, fields) => {
    if (error) throw error;
  }
);

export default connection;
