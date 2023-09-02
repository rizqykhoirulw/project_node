import mysql from "mysql";

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "r1zqykh01rulw",
    database: "datatour"
})

db.connect((err) => {
    if (err) {
      console.error("Error connecting to database:", err.message);
      return;
    }
    console.log("Connected to the database!");
  });

export default db;