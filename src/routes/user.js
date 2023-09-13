import { Router } from "express";
import u from "../controllers/user.js";

const router = Router();

router.post("/register", u.register);
router.post("/login", u.login);

export default router;
