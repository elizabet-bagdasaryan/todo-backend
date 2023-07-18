import express from "express";
import {
  getTodo,
  getTodos,
  deleteTodo,
  createTodo,
} from "../controllers/todosController.js";
const router = express.Router();

router.get("/todos/:id", getTodo);

router.get("/todos", getTodos);

router.post("/todos", createTodo);

router.delete("/todos/:id", deleteTodo);

export default router;
