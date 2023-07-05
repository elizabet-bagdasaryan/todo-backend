import express from "express";
import {
  getTodo,
  getTodos,
  deleteTodo,
  createTodo,
} from "../controllers/todosController.js";
const router = express.Router();

router.get("/:id", getTodo);

router.get("/", getTodos);

router.post("/create", createTodo);

router.delete("/delete/:id", deleteTodo);

export default router;
