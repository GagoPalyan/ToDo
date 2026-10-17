import { useSearchParams } from "react-router-dom";
import { useGetTodos } from "../../../api/todos/get";
import Button from "../../../components/ui/button";
import Todo from "./todo";
import { useState } from "react";
import EditModal from "./modal/edit";
import { TodoSort, type ITodo } from "../../../types/todos";
import DeleteModal from "./modal/delete";

function List() {
  const [onEdit, setEdit] = useState<ITodo | null>(null);
  const [onDelete, setDelete] = useState<ITodo["id"] | null>(null);
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") ?? undefined;
  const sort = (searchParams.get("sort") as TodoSort) ?? TodoSort.ASC;

  const { data, hasNextPage, fetchNextPage } = useGetTodos({
    search,
    sort,
    limit: 5,
  });

  return (
    <>
      <ul className="w-full flex flex-col justify-center items-stretch gap-2 shadow-md list-none">
        {data?.map((todo) => (
          <Todo key={todo.id} {...todo} onEdit={setEdit} onDelete={setDelete} />
        ))}
      </ul>
      {hasNextPage && <Button handleClick={fetchNextPage}>Load More</Button>}
      {onEdit && (
        <EditModal todo={onEdit as ITodo} onClose={() => setEdit(null)} />
      )}
      {onDelete && (
        <DeleteModal id={onDelete} onClose={() => setDelete(null)} />
      )}
    </>
  );
}

export default List;
