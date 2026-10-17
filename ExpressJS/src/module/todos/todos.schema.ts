import { z } from "zod";

const getTodosSchema = z
  .object({
    search: z.string().max(50).optional(),
    sort: z.enum(["asc", "desc", "priority", "completed"]).optional(),
    page: z.coerce.number().int().positive().default(1),
    limit: z.coerce.number().int().positive().default(12),
  })
  .strict();

const createTodoSchema = z
  .object({
    title: z.string().min(3).max(50),
    description: z.string().min(3).max(150),
    priority: z.int().min(1).max(3),
  })
  .strict();

const updateTodoParamsSchema = z
  .object({
    id: z.string(),
  })
  .strict();

const updateTodoBodySchema = z
  .object({
    title: z.string().min(3).max(50).optional(),
    description: z.string().min(3).max(150).optional(),
    completed: z.boolean().optional(),
    priority: z.int().min(1).max(3).optional(),
  })
  .strict();

const deleteTodoSchema = z
  .object({
    id: z.string(),
  })
  .strict();

export {
  getTodosSchema,
  createTodoSchema,
  updateTodoParamsSchema,
  updateTodoBodySchema,
  deleteTodoSchema,
};
