import db from "../db.js"
import jwt from "jsonwebtoken";

export const getPosts= (req, res) => {
    const q = "SELECT * FROM content";
    db.query(q, (err, data) => {
        if (err) return res.send(err);
        return res.status(200).json(data);
    })
}

export const getPost= () => {
    
}

export const addPost = (req, res) => {
  const token = req.headers["authorization"];
  const { judul, kode_tour, deskripsi, tujuan, fasilitas, pick_up, durasi, foto, harga  } = req.body;

  try {
    if (!token) {
      throw new Error("Not authenticated");
    }

    // Kode berlanjut jika token ada
  } catch (error) {
    // Tangani error di sini
    res.status(401).json(error.message);
    console.error(error);
  }

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token tidak valid");

    const q = "INSERT INTO content (judul, deskripsi, kode_tour, tujuan, fasilitas, pick_up, durasi, harga, foto) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";

    db.query(q, [judul, deskripsi, kode_tour, tujuan, fasilitas, pick_up, durasi, harga, foto], (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(201).json({
        message: "Post created successfully",
        postId: data.insertId
      });
    });
  });
};


export const updatePost= () => {
    
}


export const deletePost= (req, res) => {
  const token = req.headers["authorization"];
    try {
        if (!token) {
          throw new Error("Not authenticated");
        }
      
        // Kode berlanjut jika token ada
      } catch (error) {
        // Tangani error di sini
        res.status(401).json(error.message);
        console.error(error);
      }
      
    // if(!token) return res.status(401).json("Not authenticated");

    jwt.verify(token, "jwtkey", (err, userInfo)=>{
        if (err) return res.status(403).json("Token tidak valid");

        const postId = req.params.id;
        console.log(postId)
        const q = "DELETE FROM content WHERE `idcontent` = ?";

        db.query(q, [postId], (err, data)=>{
            if(err) return res.status(403).json({
              message: "Your id not ada",
              data: err.message
            });

            return res.json("Data has been deleted");
        })
    })
}