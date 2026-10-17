import { useForm } from "react-hook-form";
import ActionModal from "./modal";
import { useCreateTodo } from "../../../../api/todos/create";
import type { TodoFormValues } from "../../types/schema";
import Content from "./content";
import { HOOK_FORM_CONFIGS } from "../../constants/config";

interface ICreateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function CreateModal({ isOpen, onClose }: ICreateModalProps) {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TodoFormValues>(HOOK_FORM_CONFIGS);
  const { mutateAsync, isPending } = useCreateTodo();

  const onSubmit = handleSubmit(async (data) => {
    try {
      await mutateAsync(data);
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
      title="Create ToDo"
      submitButtonText="Create"
      isLoading={isPending}
      isOpen={isOpen}
      onClose={onCloseModal}
      onSubmit={onSubmit}
    >
      <Content control={control} errors={errors} />
    </ActionModal>
  );
}

export default CreateModal;
