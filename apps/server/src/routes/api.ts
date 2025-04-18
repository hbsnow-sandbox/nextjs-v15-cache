import { Router } from "express";

const router = Router();

// Hello エンドポイント
router.get("/hello", (_, res) => {
  res.json({ message: "Hello World!" });
});

// ユーザー情報エンドポイント（サンプル）
router.get("/users", (_, res) => {
  res.json([
    { id: 1, name: "User 1" },
    { id: 2, name: "User 2" },
  ]);
});

export default router;
