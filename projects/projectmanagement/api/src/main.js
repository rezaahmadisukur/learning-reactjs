import express from "express";
import "dotenv/config";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectionDB from "./config/db.js";
import router from "./routes/index.js";

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true
  })
);

app.use(express.json());
app.use(cookieParser());

// http://localhost:3000/api
app.use("/api", router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  connectionDB();
  console.log(`Server is running on PORT ${PORT}`);
});
