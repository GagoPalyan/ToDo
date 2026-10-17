type TodoPriority = 1 | 2 | 3;

type TodoSort = "asc" | "desc" | "priority" | "completed";

interface GetTodoQuery {
  search?: string;
  sort?: TodoSort;
  page?: number;
  limit?: number;
}

interface CreateTodoInput {
  title: string;
  description: string;
  completed: boolean;
  priority: TodoPriority;
}

interface UpdateTodoInput {
  title?: string;
  description?: string;
  completed?: boolean;
  priority?: TodoPriority;
}

export type {
  TodoPriority,
  TodoSort,
  GetTodoQuery,
  CreateTodoInput,
  UpdateTodoInput,
};
