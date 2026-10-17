import { SORTS } from "./todos.constants";
import TodosModel from "./todos.model";
import type { TodoSort, CreateTodoInput, UpdateTodoInput } from "./todos.types";

class TodosRepository {
  async getAll(
    search?: string,
    sort: TodoSort = "asc",
    page: number = 1,
    limit: number = 12,
  ) {
    const filter = search
      ? {
          title: {
            $regex: search,
            $options: "i",
          },
        }
      : {};

    const skip = (page - 1) * limit;

    const [todos, total] = await Promise.all([
      TodosModel.find(filter)
        .select("title description completed priority")
        .skip(skip)
        .limit(limit)
        .sort(SORTS[sort]),
      TodosModel.countDocuments(filter),
    ]);

    const totalPages = Math.ceil(total / limit);

    return {
      todos,
      total,
      page,
      limit,
      totalPages,
      isLastPage: page >= totalPages,
    };
  }

  async create(body: CreateTodoInput) {
    return TodosModel.create(body);
  }

  async update(id: string, body: UpdateTodoInput) {
    return TodosModel.updateOne({ _id: id }, { $set: body });
  }

  async delete(id: string) {
    return TodosModel.deleteOne({ _id: id });
  }
}

export default TodosRepository;
