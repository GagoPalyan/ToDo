import TodosRepository from "./todos.repository";
import NotFoundError from "../../errors/not-found.error";
import AppError from "../../errors/app.error";
import type { CreateTodoInput, TodoSort, UpdateTodoInput } from "./todos.types";

class TodosService {
  private readonly todosRepository: TodosRepository;

  constructor() {
    this.todosRepository = new TodosRepository();
  }

  async getAllTodos(
    search?: string,
    sort?: TodoSort,
    page?: number,
    limit?: number,
  ) {
    const todos = await this.todosRepository.getAll(search, sort, page, limit);

    if (!todos) throw new NotFoundError("There is no todos on database");

    return todos;
  }

  async createTodo(body: CreateTodoInput) {
    const todo = await this.todosRepository.create(body);

    if (!todo) throw new AppError(400, "Something went wrong. Try again");
  }

  async updateTodo(id: string, body: UpdateTodoInput) {
    const todo = await this.todosRepository.update(id, body);

    if (!todo) throw new AppError(400, "Something went wrong. Try again");
  }

  async deleteTodo(id: string) {
    await this.todosRepository.delete(id);
  }
}

export default TodosService;
