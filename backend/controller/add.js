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

export const addPost= () => {
    
}

export const updatePost= () => {
    
}

export const deletePost = (req, res) => {
    const {idcontent} = req.query;

    const queryCheck = "SELECT * FROM content WHERE idcontent = ?";

    db.query(queryCheck, [idcontent], (err, data) => {
        if(err){
            return res.status(500).json({
                status: 500,
                error: err
            })
        }

        if(!data.length){
            return res.status(400).json({
                status: 400,
                error: "content not found"
            })
        }

        const query = "DELETE FROM content WHERE idcontent = ?;"

        db.query(query, [idcontent], (err, data) => {
            if (err) {
                return res.status(500).json({
                    status: 500,
                    error: err
                })
            }

            return res.status(200).json({
                status: 200,
                message: "success delete content"
            })
        })
    })
}
// export const deletePost= (req, res) => {
//     const token = req.cookies.access_token;
//     try {
//         if (!token) {
//           throw new Error("Not authenticated");
//         }
      
//         // Kode berlanjut jika token ada
//       } catch (error) {
//         // Tangani error di sini
//         res.status(401).json(error.message);
//       }
      
//     // if(!token) return res.status(401).json("Not authenticated");

//     jwt.verify(token, "jwtkey", (err, userInfo)=>{
//         if (err) return res.status(403).json("Token tidak valid");

//         const postId = req.params.id;
//         const q = "DELETE FROM posts WHERE `id` = ?";

//         db.query(q, [postId, userInfo.id], (err, data)=>{
//             if(err) return res.status(403).json("Your id not ada");

//             return res.json("Data has been deleted");
//         })
//     })
// }