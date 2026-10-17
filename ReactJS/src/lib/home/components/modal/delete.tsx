import Modal from "../../../../components/ui/modal";
import Button from "../../../../components/ui/button";
import type { ITodo } from "../../../../types/todos";
import { useDeleteTodo } from "../../../../api/todos/delete";

interface IDeleteModalProps {
  id: ITodo["id"];
  onClose: () => void;
}

function DeleteModal({ id, onClose }: IDeleteModalProps) {
  const { mutateAsync, isPending } = useDeleteTodo();

  const onSubmit = async () => {
    try {
      await mutateAsync({ id });
      onClose();
    } catch {
      console.error("Something went wrong!");
    }
  };

  return (
    <Modal isOpen={true} onClose={onClose}>
      <div className="w-xs flex flex-col gap-6 items-center">
        <h2 className="font-bold text-center w-full text-3xl pb-1 border-b-4">
          Delete ToDo
        </h2>
        <p className="text-sm text-gray-600 text-center">
          Are you sure you want to delete this ToDo? This action cannot be
          undone.
        </p>
        <div className="w-full flex items-center justify-between text-2xl pt-3 border-t-4">
          <Button
            isLoading={isPending}
            handleClick={onClose}
            className="bg-white text-black"
          >
            Cancel
          </Button>
          <Button
            isLoading={isPending}
            handleClick={onSubmit}
            className="bg-red-500 text-white"
          >
            Delete
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default DeleteModal;
