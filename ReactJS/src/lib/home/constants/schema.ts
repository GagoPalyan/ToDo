import * as yup from "yup";

const todoSchema = yup
  .object({
    title: yup.string().min(3).max(50).required(),
    description: yup.string().min(3).max(150).required(),
    priority: yup.number().min(1).max(3).required(),
  })
  .required();

export { todoSchema };
