import { useUpdateTodo } from "../../../api/todos/patch";
import Toggle from "../../../components/ui/toogle";

interface ICompletedProps {
  id: string;
  value: boolean;
}

function Completed({ id, value }: ICompletedProps) {
  const { mutateAsync } = useUpdateTodo();

  const callback = (completed: boolean) => {
    mutateAsync({ id, completed });
  };

  return (
    <Toggle
      initialValue={value}
      callback={callback}
      onText="Completed"
      offText="Not completed"
    />
  );
}

export default Completed;
