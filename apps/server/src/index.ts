import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import apiRoutes from "./routes/api.js";

// 環境変数の読み込み
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// ミドルウェアの設定
app.use(cors());
app.use(helmet());
app.use(morgan(":date[iso] :method :url :status :response-time ms"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ルートエンドポイント
app.get("/", (_, res) => {
  res.json({ message: "Welcome to the API" });
});

// API ルートの統合
app.use("/api", apiRoutes);

// サーバー起動
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
