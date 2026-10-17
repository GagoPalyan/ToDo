import type { Request, Response } from "express";
import TodosService from "./todos.service";
import type { GetTodoQuery, UpdateTodoInput } from "./todos.types";

const todosService = new TodosService();

class TodosController {
  getAllTodos = async (req: Request, res: Response) => {
    const { search, sort, page, limit } = req.validatedQuery as GetTodoQuery;

    const todos = await todosService.getAllTodos(search, sort, page, limit);

    return res.status(200).json({
      success: true,
      data: todos,
    });
  };

  async createTodo(req: Request, res: Response) {
    const body = req.body;

    await todosService.createTodo(body);

    return res.sendStatus(201);
  }

  async updateTodo(req: Request, res: Response) {
    const id = req.params.id as string;
    const body = req.body as UpdateTodoInput;

    await todosService.updateTodo(id, body);

    return res.sendStatus(200);
  }

  async deleteTodo(req: Request, res: Response) {
    const id = req.params.id as string;

    await todosService.deleteTodo(id);

    return res.sendStatus(204);
  }
}

const todosController = new TodosController();

export default todosController;
