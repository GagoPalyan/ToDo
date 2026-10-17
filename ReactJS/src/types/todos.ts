enum TodoSort {
  ASC = "asc",
  DESC = "desc",
  PRIORITY = "priority",
  COMPLETED = "completed",
}

interface ITodo {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  priority: number;
}

interface IGetTodoQuery {
  search?: string;
  limit?: number;
  page?: number;
  sort?: TodoSort;
}

interface IGetTodoResponse {
  todos: ITodo[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  isLastPage: boolean;
}

type TCreateTodoInput = Omit<ITodo, "id" | "completed">;

type TUpdateTodoInput = Partial<Omit<ITodo, "id">> & Pick<ITodo, "id">;

type TDeleteTodoInput = Pick<ITodo, "id">;

export {
  TodoSort,
  type ITodo,
  type IGetTodoQuery,
  type IGetTodoResponse,
  type TCreateTodoInput,
  type TUpdateTodoInput,
  type TDeleteTodoInput,
};
