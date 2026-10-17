import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import type { IGetTodoQuery, IGetTodoResponse } from "../../types/todos";
import { DEFAULT_TODO_RESULTS } from "../../constants/todos";

const getTodos = async (query: IGetTodoQuery): Promise<IGetTodoResponse> =>
  await axios
    .get("/api/todos", { params: query })
    .then((res) => res.data.data as IGetTodoResponse)
    .catch(() => DEFAULT_TODO_RESULTS);

const useGetTodos = (query: IGetTodoQuery) =>
  useInfiniteQuery({
    queryKey: [
      "todos",
      "get",
      query.search,
      query.sort,
      query.limit,
      query.page,
    ],
    initialPageParam: 1,
    queryFn: ({ pageParam }) => getTodos({ ...query, page: pageParam }),
    select: (data) => data.pages.flatMap((page) => page.todos),
    getNextPageParam: (lastPage) => {
      if (!lastPage.isLastPage) return lastPage.page + 1;
    },
  });

export { useGetTodos };
