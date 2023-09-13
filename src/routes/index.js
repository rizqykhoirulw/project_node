import { Router } from "express";
import user from "./user.js";
import content from "./content.js";

const router = Router();

router.get("/", async (req, res, next) => {
  res.status(200).json({
    status: 200,
    message: "hello world",
    data: null,
  });
});

router.use("/user", user);
router.use("/content", content);
export default router;
