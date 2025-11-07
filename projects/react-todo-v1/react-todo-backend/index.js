import express from "express";
import cors from "cors";
import "dotenv/config.js";
import connectionDB from "./config/db.js";
import TodoRoutes from "./routes/TodoRoutes.js";

// PORT
const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(TodoRoutes);

app.listen(PORT, () => {
  connectionDB();
  console.log(`Server is running on PORT ${PORT}`);
});
