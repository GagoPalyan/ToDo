import Modal from "../../../../components/ui/modal";
import Button from "../../../../components/ui/button";

interface IActionModalProps {
  children: React.ReactNode;
  title: string;
  submitButtonText: string;
  isLoading: boolean;
  isOpen: boolean;
  onSubmit: () => void;
  onClose: () => void;
}

function ActionModal({
  children,
  title,
  submitButtonText,
  isLoading,
  isOpen,
  onSubmit,
  onClose,
}: IActionModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form
        className="w-xs flex flex-col gap-6 items-center"
        onSubmit={onSubmit}
      >
        <h2 className="font-bold text-center w-full text-3xl pb-1 border-b-4">
          {title}
        </h2>
        {children}
        <div className="w-full flex items-center justify-between text-2xl pt-3 border-t-4">
          <Button
            isLoading={isLoading}
            handleClick={onClose}
            className="bg-white text-black"
          >
            Cancel
          </Button>
          <Button isLoading={isLoading} type="submit">
            {submitButtonText}
          </Button>
        </div>
      </form>
    </Modal>
  );
}

export default ActionModal;
