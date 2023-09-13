import content from "../controllers/content.js";
import auth from "../middlewares/auth.js";
import { Router } from "express";

const router = Router();

router.get("/", content.getAll);
router.get("/detail", content.getDetail);
router.post("/", auth.authenticate, content.create);
router.put("/:id", auth.authenticate, content.update);
router.delete("/:id", auth.authenticate, content.deleteContent);

export default router;
