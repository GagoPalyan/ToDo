import { twMerge } from "tailwind-merge";
import Error from "../error";

interface InputProps {
  placeholder?: string;
  error?: string;
  value: string;
  setValue: (value: string) => void;
}

function Input({ placeholder, error, value, setValue }: InputProps) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={twMerge(
          "w-full bg-white border rounded-lg p-2 text-lg font-semibold shadow-md outline-none",
          error ? "border-red-600" : "border-black",
        )}
      />
      <Error error={error} />
    </div>
  );
}

export default Input;
