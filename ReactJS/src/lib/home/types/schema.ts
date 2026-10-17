import type { InferType } from "yup";
import type { todoSchema } from "../constants/schema";

type TodoFormValues = InferType<typeof todoSchema>;

export type { TodoFormValues };
