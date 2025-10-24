import { Router } from "express";
import { login, register } from "../controllers/authenticationController.js";

const route = Router();

// http://localhost:3000/api/auth/register
route.post("/register", register);
route.post("/login", login);

export default route;
