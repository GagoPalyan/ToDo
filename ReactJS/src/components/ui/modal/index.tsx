import type { MouseEvent } from "react";

interface IModalProps {
  isOpen: boolean;
  children: React.ReactNode;
  onClose: () => void;
}

function Modal({ isOpen, onClose, children }: IModalProps) {
  const handleClick = (event: MouseEvent<HTMLDivElement>): void => {
    event.stopPropagation();
  };

  if (!isOpen) return null;

  return (
    <section
      onClick={onClose}
      className="w-screen h-screen bg-black/30 backdrop-blur-sm flex items-center justify-center fixed top-0 left-0"
    >
      <div onClick={handleClick} className="bg-cyan-100 px-6 py-3 border-4 rounded-lg">
        {children}
      </div>
    </section>
  );
}

export default Modal;
