import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

interface LinkButtonProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

function LinkButton({ href, className, children }: LinkButtonProps) {
  return (
    <Link
      to={href}
      className={twMerge(
        "outline-none bg-black text-white px-4 py-2 text-lg font-semibold",
        className,
      )}
    >
      {children}
    </Link>
  );
}

export default LinkButton;
