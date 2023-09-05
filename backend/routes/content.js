import express from "express";

import {getAll, createContent, update, deleteContent} from "../controller/content.js"

const router = express.Router()

router.get("/", getAll)

router.post("/", createContent)

router.put("/", update)

router.delete("/", deleteContent)

export default router;