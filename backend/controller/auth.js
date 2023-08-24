import db from "../db.js";
import bcrypt from "bcryptjs";

export const register = (req, res)=>{
    const q = "SELECT * FROM users WHERE email = ? OR username = ?";

    db.query(q, [req.body.email, req.body.username], (err, data) => {
        if (err) return res.status(500).json(err);
        if (data.length) return res.status(409).json("Akun sudah ada!");

        // Enkrsipsi password
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        // Buat akun
        const p = "INSERT INTO users(`username`, `email`, `password`) VALUES (?, ?, ?)";
        const nilai = [req.body.username, req.body.email, hash];

        db.query(p, [nilai], (err, data) => {
            if (err) return res.status(500).json(err);
            return res.status(200).json("Akun telah dibuat");
        })
    })
}