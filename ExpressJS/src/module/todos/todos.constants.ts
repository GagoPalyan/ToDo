import { TodoSort } from "./todos.types";

const SORTS: Record<TodoSort, Record<string, 1 | -1>> = {
  asc: { createdAt: -1 },
  desc: { createdAt: 1 },
  priority: { priority: -1, createdAt: -1 },
  completed: { completed: -1, createdAt: -1 },
};

export { SORTS };
