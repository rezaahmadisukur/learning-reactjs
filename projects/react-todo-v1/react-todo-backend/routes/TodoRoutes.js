import {
  index,
  store,
  show,
  destroy,
  update
} from "../controllers/TodoController.js";
import { Router } from "express";

const TodoRoutes = Router();

TodoRoutes.get("/todos", index);
TodoRoutes.get("/todos/:id", show);
TodoRoutes.post("/todos", store);
TodoRoutes.put("/todos/:id", update);
TodoRoutes.delete("/todos/:id", destroy);

export default TodoRoutes;
