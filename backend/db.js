import mysql from "mysql";

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "r1zqykh01rulw",
    database: "datatour"
})

export default db;