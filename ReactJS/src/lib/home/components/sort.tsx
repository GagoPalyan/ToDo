import { useSearchParams } from "react-router-dom";
import Dropdown from "../../../components/ui/dropdown";
import { SORT_OPTIONS } from "../constants/sort";
import { TodoSort } from "../../../types/todos";

function Sort() {
  const [searchParams, setSearchParams] = useSearchParams();

  const sort = (searchParams.get("sort") as TodoSort) ?? TodoSort.ASC;

  const onChange = (value: TodoSort) => {
    searchParams.set("sort", value);

    setSearchParams(searchParams, { replace: true });
  };

  return (
    <Dropdown
      className="w-55"
      placeholder="Sort by"
      options={SORT_OPTIONS}
      value={sort}
      setValue={onChange}
    />
  );
}

export default Sort;
