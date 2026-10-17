import Button from "../../../components/ui/button";
import type { ITodo } from "../../../types/todos";
import Completed from "./completed";
import Priority from "./prioryty";

interface TodoProps extends ITodo {
  onEdit: (todo: ITodo) => void;
  onDelete: (id: ITodo["id"]) => void;
}

function Todo({
  id,
  title,
  description,
  priority,
  completed,
  onEdit,
  onDelete,
}: TodoProps) {
  const todo: ITodo = {
    id,
    title,
    description,
    priority,
    completed,
  };

  return (
    <li className="w-full bg-cyan-100 p-2 border rounded-lg border-black shadow-md flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold truncate">{title}</h3>
        <Priority priority={priority} />
      </div>
      <p>{description}</p>
      <div className="flex items-center justify-between border-t-2 pt-2">
        <Completed id={id} value={completed} />
        <div className="flex justify-end gap-2">
          <Button
            className="bg-white border-blue-600 text-blue-600 text-sm py-1"
            handleClick={() => onEdit(todo)}
          >
            Edit
          </Button>
          <Button
            className="bg-white border-red-600 text-red-600 text-sm py-1"
            handleClick={() => onDelete(id)}
          >
            Delete
          </Button>
        </div>
      </div>
    </li>
  );
}

export default Todo;
