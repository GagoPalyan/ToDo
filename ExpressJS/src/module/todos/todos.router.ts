import express from "express";
import {
  validateBody,
  validateParams,
  validateQuery,
} from "../../middleware/validate.middleware";
import {
  createTodoSchema,
  deleteTodoSchema,
  getTodosSchema,
  updateTodoBodySchema,
  updateTodoParamsSchema,
} from "./todos.schema";
import todosController from "./todos.controller";

const router = express();

router.get("/", validateQuery(getTodosSchema), todosController.getAllTodos);
router.post("/", validateBody(createTodoSchema), todosController.createTodo);
router.patch(
  "/:id",
  validateParams(updateTodoParamsSchema),
  validateBody(updateTodoBodySchema),
  todosController.updateTodo,
);
router.delete(
  "/:id",
  validateParams(deleteTodoSchema),
  todosController.deleteTodo,
);

export default router;
