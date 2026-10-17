import axios from "axios";
import type { TDeleteTodoInput } from "../../types/todos";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const deleteTodo = async ({ id }: TDeleteTodoInput) =>
  await axios.delete(`/api/todos/${id}`);

const useDeleteTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["todo"],
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({
      queryKey: ["todos", "get"],
      });
    },
  });
};

export { useDeleteTodo };
