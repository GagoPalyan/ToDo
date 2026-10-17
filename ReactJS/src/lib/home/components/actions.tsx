import Button from "../../../components/ui/button";

interface ActionsProps {
  onEdit: () => void;
  onDelete: () => void;
}

function Actions({ onEdit, onDelete }: ActionsProps) {
  return (
    <div className="flex justify-end gap-2 border-t border-gray-200 pt-2">
      <Button
        className="bg-white border-blue-600 text-blue-600 text-sm"
        handleClick={onEdit}
      >
        Edit
      </Button>
      <Button
        className="bg-white border-red-600 text-red-600 text-sm"
        handleClick={onDelete}
      >
        Delete
      </Button>
    </div>
  );
}

export default Actions;
