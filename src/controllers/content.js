import mysql from "../configs/database.js";

const getAll = (req, res, next) => {
  const queryGetAll = "SELECT * FROM contents";
  mysql.query(queryGetAll, (err, results) => {
    return res.status(200).json({
      status: 200,
      message: "success get all contents",
      data: results,
    });
  });
};

const getDetail = (req, res, next) => {
  const { id } = req.query;
  const queryGetAll = "SELECT * FROM contents WHERE id = ? LIMIT 1";

  mysql.query(queryGetAll, [id], (err, result) => {
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
        error: "content not found",
      });
    }

    return res.status(200).json({
      status: 200,
      message: "success get detail content",
      data: result,
    });
  });
};

const create = (req, res, next) => {
  const { judul, deskripsi, lokasi, fasilitas, foto } = req.body;
  const { id: userID, username } = req.user;

  if (!judul || !deskripsi || !lokasi || !fasilitas || !foto) {
    return res.status(400).json({
      status: 400,
      error: "missing body request",
    });
  }

  const queryCreate = "INSERT INTO contents SET ?";

  mysql.query(
    queryCreate,
    { user_id: userID, judul, deskripsi, lokasi, fasilitas, foto },
    (err, result) => {
      if (err) {
        return res.status(500).json({
          status: 500,
          error: err.name,
          message: err.message,
        });
      }

      return res.status(201).json({
        status: 201,
        message: "success create new content",
        data: null,
      });
    }
  );
};

const update = (req, res, next) => {
  const { id } = req.params;
  const { judul, deskripsi, lokasi, fasilitas, foto } = req.body;

  if (!id || (!judul && !deskripsi && !lokasi && !fasilitas && !foto)) {
    return res.status(400).json({
      status: 400,
      error: "missing data in body",
    });
  }

  let query = "UPDATE contents SET ";

  const updatedField = [[], []];
  let count = 0;
  if (judul) {
    updatedField[0].push("judul = ?");
    updatedField[1].push(judul);
  }
  if (deskripsi) {
    updatedField[0].push("deskripsi = ?");
    updatedField[1].push(deskripsi);
  }
  if (lokasi) {
    updatedField[0].push("lokasi = ?");
    updatedField[1].push(lokasi);
  }
  if (fasilitas) {
    updatedField[0].push("fasilitas = ?");
    updatedField[1].push(fasilitas);
  }
  if (foto) {
    updatedField[0].push("foto = ?");
    updatedField[1].push(foto);
  }

  updatedField[1].push(id);

  for (let i = 0; i < updatedField[0].length; i++) {
    if (i == updatedField[0].length - 1) {
      query += updatedField[0];
    } else {
      query += updatedField[0] + ",";
    }
  }

  query += " WHERE id = ?;";

  mysql.query(query, updatedField[1], (err, data) => {
    if (err) {
      return res.status(500).json({
        status: 500,
        message: err,
      });
    }

    return res.status(200).json({
      status: 200,
      message: "success update content",
    });
  });
};

const deleteContent = (req, res, next) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      status: 400,
      error: "missing id params",
    });
  }

  const checkContent = "SELECT * FROM contents WHERE id = ? LIMIT 1";

  mysql.query(checkContent, [id], (err, result) => {
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
        error: "content not found",
      });
    }

    const queryDelete = "DELETE FROM contents WHERE id = ?";

    mysql.query(queryDelete, [id], (err, result) => {
      if (err) {
        return res.status(500).json({
          status: 500,
          error: err.name,
          message: err.message,
        });
      }

      return res.status(200).json({
        status: 200,
        message: "success delete content",
        data: null,
      });
    });
  });
};

export default { getAll, getDetail, create, update, deleteContent };
