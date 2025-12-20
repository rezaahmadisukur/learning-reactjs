import { Router } from "express";
import authenticationRoutes from "./authenticationRoutes.js";

const route = Router();

// http://localhost:3000/api/auth
route.use("/auth", authenticationRoutes);

export default route;
