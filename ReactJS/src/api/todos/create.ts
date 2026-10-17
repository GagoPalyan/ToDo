import axios from "axios";
import type { TCreateTodoInput } from "../../types/todos";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const createTodo = async (body: TCreateTodoInput) =>
  await axios.post(`/api/todos`, body);

const useCreateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["todo"],
    mutationFn: createTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({
      queryKey: ["todos", "get"],
      });
    },
  });
};

export { useCreateTodo };
