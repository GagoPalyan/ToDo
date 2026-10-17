import { useState } from "react";
import { twMerge } from "tailwind-merge";

interface IToggleProps {
  initialValue: boolean;
  onText: string;
  offText: string;
  callback: (val: boolean) => void;
}

function Toggle({ initialValue, onText, offText, callback }: IToggleProps) {
  const [value, setValue] = useState(initialValue);

  const handleClick = () => {
    const newValue = !value;
    setValue(newValue);
    callback(newValue);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={twMerge(
        "outline-none px-2 py-1 font-semibold border rounded-lg cursor-pointer",
        value
          ? "bg-green-500 text-white border-green-500"
          : "bg-cyan-500 text-white border-black",
      )}
    >
      {value ? onText : offText}
    </button>
  );
}

export default Toggle;
