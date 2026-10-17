import { useEffect, useState } from "react";
import Input from "../../../components/ui/input";
import { useSearchParams } from "react-router-dom";

function Search() {
  const [search, setSearch] = useState("");
  const [searchParam, setSearchParam] = useSearchParams();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (search) searchParam.set("search", search);
      else searchParam.delete("search");

      setSearchParam(searchParam, { replace: true });
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [search]);

  return <Input placeholder="Search..." value={search} setValue={setSearch} />;
}

export default Search;
