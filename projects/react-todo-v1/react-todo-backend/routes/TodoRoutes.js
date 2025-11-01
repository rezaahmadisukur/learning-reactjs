import { index, store, show } from "../controllers/TodoController.js";
import { Router } from "express";

const TodoRoutes = Router();

TodoRoutes.get("/todos", index);
TodoRoutes.get("/todos/:id", show);
TodoRoutes.post("/todos", store);

export default TodoRoutes;
