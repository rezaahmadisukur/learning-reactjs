import express from "express";
import dotenv from "dotenv";
import db from "./config/Database.js";
import router from "./routes/index.js";
// import Users from "./models/UserModel.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

try {
  await db.authenticate();
  console.log("Database Connected...");
  // await Users.sync();
} catch (error) {
  console.error(error);
}

app.use(express.json());
app.use(router);

app.listen(PORT, () => console.log("Server running at port 5000"));
