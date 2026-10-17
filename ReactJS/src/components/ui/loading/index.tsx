import { twMerge } from "tailwind-merge";

interface LoadingProps {
  className?: string;
}

function Loading({ className = "" }: LoadingProps) {
  return (
    <div
      className={twMerge(
        "absolute top-0 left-0 w-full h-full backdrop-blur-lg flex items-center justify-center pointer-events-none",
        className,
      )}
    >
      <span className="rounded-full border-t-4 size-4 animate-spin" />
    </div>
  );
}

export default Loading;
