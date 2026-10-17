import { yupResolver } from "@hookform/resolvers/yup";
import { todoSchema } from "./schema";

const HOOK_FORM_CONFIGS = {
  resolver: yupResolver(todoSchema),
  reValidateMode: "onBlur",
  defaultValues: {
    title: "",
    description: "",
    priority: 1,
  },
} as const;

export { HOOK_FORM_CONFIGS };
