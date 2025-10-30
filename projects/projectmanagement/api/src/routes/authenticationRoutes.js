import { Router } from "express";
import {
  login,
  logout,
  register,
  whoami
} from "../controllers/authenticationController.js";
import { verifyToken } from "../middleware/verirfyToken.js";

const route = Router();

// http://localhost:3000/api/auth/register
route.post("/register", register);
route.post("/login", login);

route.post("/logout", verifyToken, logout);
route.get("/whoami", verifyToken, whoami);

export default route;
