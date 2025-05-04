import { Router } from "express";

const router = Router();

// Hello エンドポイント
router.get("/hello", (_, res) => {
  res.json({ message: "Hello World!" });
});

export default router;
