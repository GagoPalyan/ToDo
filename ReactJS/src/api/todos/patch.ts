import axios from "axios";
import type { TUpdateTodoInput } from "../../types/todos";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const updateTodo = async ({ id, ...body }: TUpdateTodoInput) =>
  await axios.patch(`/api/todos/${id}`, body);

const useUpdateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["todo"],
    mutationFn: updateTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos", "get"],
      });
    },
  });
};

export { useUpdateTodo };
