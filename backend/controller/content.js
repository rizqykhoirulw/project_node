import db from "../db.js";

export const getAll = (req, res) => {
    const query = "SELECT * FROM content"

    db.query(query, (err, data) => {
        if(err) return res.status(500).json("Something wrong!")

        return res.status(200).json(data)
    })
}

// input idcontent masih MANUAL, belum bisa autoincrement;
// uid masih MANUAL, butuh ambil user id dari cookie;
export const createContent = (req, res) => {
    const {
            idcontent,
            judul, 
            deskripsi, 
            lokasi, 
            fasilitas, 
            foto, 
            uid
        } = req.body;

        if (!idcontent || !judul || !deskripsi || !lokasi || !fasilitas || !foto || !uid){
            return res.status(400).json({
                status: 400,
                error: "missing data in body"
            })
        }

    const query = "INSERT INTO content(`idcontent`, `judul`, `deskripsi`, `lokasi`, `fasilitas`, `foto`, `uid`) VALUES (?, ?, ?, ?, ?, ?, ?);"
    
    db.query(query, [idcontent, judul, deskripsi, lokasi, fasilitas, foto, uid], (err, data) => {
        if (err){
            return res.status(500).json({
                status: 500,
                error: err.message
            })
        }

        return res.status(201).json({
            status: 201,
            message: "success create new content",
        })
    })
}

export const update = (req, res) => {
    const {
        idcontent,
        judul, 
        deskripsi, 
        lokasi, 
        fasilitas, 
        foto, 
    } = req.body;

    if (!idcontent || (!judul && !deskripsi && !lokasi && !fasilitas && !foto) ){
        return res.status(400).json({
            status: 400,
            error: "missing data in body"
        })
    }

    let query = "UPDATE content SET "

    const updatedField = [[],[]];
    let count =  0;
    if(judul){
        updatedField[0].push("judul = ?")
        updatedField[1].push(judul)
    }
    if(deskripsi ){
        updatedField[0].push("deskripsi = ?")
        updatedField[1].push(deskripsi)
    }
    if(lokasi ){
        updatedField[0].push("lokasi = ?")
        updatedField[1].push(lokasi)
    }
    if(fasilitas ){
        updatedField[0].push("fasilitas = ?")
        updatedField[1].push(fasilitas)
    }
    if(foto ){
        updatedField[0].push("foto = ?")
        updatedField[1].push(foto)
    }

    updatedField[1].push(idcontent)
    
    for (let i = 0; i < updatedField[0].length; i++){
        if(i == updatedField[0].length - 1){
            query += updatedField[0]
        }else{
            query += updatedField[0] + ","
        }
    }

    query += " WHERE idcontent = ?;"

    // console.log("INI HASILNYA: ", query);
    db.query(query, updatedField[1], (err, data) => {
        if (err) {
            return res.status(500).json({
                status: 500,
                message: err
            })
        }

        return res.status(200).json({
            status: 200,
            message: "success update content"
        })
    })
}

export const deleteContent = (req, res) => {
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