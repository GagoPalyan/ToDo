import { twMerge } from "tailwind-merge";
import Error from "../error";

interface DropdownOption<T extends string> {
  label: string;
  value: T;
}

interface DropdownProps<T extends string> {
  options: DropdownOption<T>[];
  value: T;
  setValue: (value: T) => void;
  placeholder?: string;
  error?: string;
  className?: string;
}

function Dropdown<T extends string>({
  options,
  value,
  setValue,
  placeholder = "Select an option",
  error,
  className,
}: DropdownProps<T>) {
  return (
    <div className={twMerge("flex flex-col gap-1 w-full", className)}>
      <select
        value={value}
        onChange={(e) => setValue(e.target.value as T)}
        className={twMerge(
          "w-full border rounded-lg p-2 text-lg font-semibold shadow-md capitalize bg-white outline-none truncate",
          error ? "border-red-600" : "border-black",
        )}
      >
        <option value="" disabled>
          {placeholder}
        </option>

        {options.map(({ value, label }) => (
          <option key={value} value={value} className="capitalize">
            {label}
          </option>
        ))}
      </select>
      <Error error={error} />
    </div>
  );
}

export default Dropdown;
