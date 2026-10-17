import { useForm } from "react-hook-form";
import ActionModal from "./modal";
import type { TodoFormValues } from "../../types/schema";
import Content from "./content";
import { HOOK_FORM_CONFIGS } from "../../constants/config";
import { useUpdateTodo } from "../../../../api/todos/patch";
import type { ITodo } from "../../../../types/todos";

interface IEditModalProps {
  todo: ITodo;
  onClose: () => void;
}

function EditModal({ todo, onClose }: IEditModalProps) {
  const { id, ...defaultValues } = todo;

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TodoFormValues>({ ...HOOK_FORM_CONFIGS, defaultValues });
  const { mutateAsync, isPending } = useUpdateTodo();

  const onSubmit = handleSubmit(async (data) => {
    try {
      await mutateAsync({ id, ...data });
      reset();
      onClose();
    } catch {
      console.error("Something went wrong");
    }
  });

  const onCloseModal = () => {
    reset();
    onClose();
  };

  return (
    <ActionModal
      title="Edit ToDo"
      submitButtonText="Update"
      isLoading={isPending}
      isOpen
      onClose={onCloseModal}
      onSubmit={onSubmit}
    >
      <Content control={control} errors={errors} />
    </ActionModal>
  );
}

export default EditModal;
