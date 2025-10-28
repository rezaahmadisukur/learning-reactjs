import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";

const PORT = 3000;

const app = express();
mongoose.connect("mongodb://127.0.0.1:27017/fullstack_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", (error) => {
  console.log(error);
});

db.once("open", () => {
  console.log("Database connected...");
});

app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.listen(PORT, () => {
  console.log(`Server up and running...`);
});
