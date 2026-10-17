import { twMerge } from "tailwind-merge";
import Loading from "../loading";

interface ButtonProps {
  handleClick?: () => void;
  type?: "button" | "submit";
  className?: string;
  isLoading?: boolean;
  children: React.ReactNode;
}

function Button({
  handleClick = () => {},
  type = "button",
  className,
  isLoading = false,
  children,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={handleClick}
      className={twMerge(
        "outline-none bg-black border rounded-lg border-black text-white p-2 text-lg font-semibold whitespace-pre cursor-pointer relative",
        className,
      )}
    >
      {isLoading ? <Loading /> : null}
      {children}
    </button>
  );
}

export default Button;
