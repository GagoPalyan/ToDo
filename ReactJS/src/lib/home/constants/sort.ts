import { TodoSort } from "../../../types/todos";

const SORT_OPTIONS = [
  { label: "Newest first", value: TodoSort.ASC },
  { label: "Oldest first", value: TodoSort.DESC },
  { label: "Priority", value: TodoSort.PRIORITY },
  { label: "Completed", value: TodoSort.COMPLETED },
];

export { SORT_OPTIONS };
