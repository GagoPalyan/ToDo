import { Controller, type Control, type FieldErrors } from "react-hook-form";
import Dropdown from "../../../../components/ui/dropdown";
import Input from "../../../../components/ui/input";
import { PRIORITY_OPTIONS } from "../../constants/priority";
import type { ITodo, TCreateTodoInput } from "../../../../types/todos";

interface ContentProps {
  control: Control<TCreateTodoInput>;
  errors: FieldErrors<ITodo>;
}

function Content({ control, errors }: ContentProps) {
  return (
    <div className="w-full flex flex-col gap-3 items-center">
      <Controller
        name="title"
        control={control}
        render={({ field }) => (
          <Input
            placeholder="Title"
            value={field.value}
            setValue={field.onChange}
            error={errors.title?.message}
          />
        )}
      />

      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <Input
            placeholder="Description"
            value={field.value}
            setValue={field.onChange}
            error={errors.description?.message}
          />
        )}
      />

      <Controller
        name="priority"
        control={control}
        render={({ field }) => (
          <Dropdown
            placeholder="Set Priority"
            options={PRIORITY_OPTIONS}
            value={field.value}
            setValue={field.onChange}
          />
        )}
      />
    </div>
  );
}

export default Content;
