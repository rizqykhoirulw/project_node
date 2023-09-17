import express from "express";
import { getPosts, getPost, addPost, updatePost, deletePost } from "../controller/add.js";

const router = express.Router();

router.get('/', getPosts);
router.get('/:id', getPost);
router.post('/', addPost);
router.delete('/:id', deletePost);
router.put('/:id', updatePost);

export default router;