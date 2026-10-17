import { twMerge } from "tailwind-merge";
import { PRIORITY_LIST } from "../constants/priority";

interface IPriorityProps {
  priority: number;
}

function Priority({ priority }: IPriorityProps) {
  const priorityConfigs = PRIORITY_LIST[priority - 1];

  return (
    <div
      className={twMerge(
        "flex items-center justify-center font-semibold px-2 py-1 text-white rounded-lg",
        priorityConfigs?.color,
      )}
    >
      {priorityConfigs?.text}
    </div>
  );
}

export default Priority;
