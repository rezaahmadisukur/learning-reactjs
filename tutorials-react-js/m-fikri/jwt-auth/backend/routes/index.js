import express from "express";
import { getUsers, register, login } from "../controllers/UserController.js";

const router = express.Router();

router.get("/users", getUsers);
router.post("/users", register);
router.post("/login", login);

export default router;
