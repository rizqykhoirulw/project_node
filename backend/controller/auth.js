import db from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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
        
        db.query(p, nilai, (err, data) => {
            console.log(nilai)
            if (err) return res.status(500).json(err);
            return res.status(200).json("Akun telah dibuat");
        })
    })
}

export const login = (req, res) => {
    const q = "SELECT * FROM users WHERE username = ?";

    db.query(q, [req.body.username], (err, data) => {
        if (err) return res.status(500).json(err);
        if (data.length === 0) return res.status(404).json('User not found');

        // Check Password

        const checkPassword = bcrypt.compareSync(req.body.password, data[0].password);
        if(!checkPassword) return res.status(400).json("Wrong username or password");

        const token = jwt.sign({id: data[0].id}, "jwtkey");
        const {password, ...other} = data[0]

        res.cookie("access_token", token, {
            httpOnly: true
        }).status(200).json(other);

    })
}