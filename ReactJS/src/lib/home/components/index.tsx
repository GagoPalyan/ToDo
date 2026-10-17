import { useState } from "react";
import List from "./list";
import Search from "./search";
import CreateModal from "./modal/create";
import Button from "../../../components/ui/button";
import Sort from "./sort";

function Home() {
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);

  return (
    <>
      <div className="w-full max-w-2xl flex flex-col items-center justify-center gap-3 py-2">
        <h1 className="w-full text-center text-6xl font-bold">ToDo List</h1>
        <div className="w-full flex items-center gap-3">
          <Search />
          <Sort />
          <Button
            handleClick={() => setCreateModalOpen(true)}
            className="bg-green-500"
          >
            Create New
          </Button>
        </div>
        <List />
      </div>
      <CreateModal
        isOpen={isCreateModalOpen}
        onClose={() => {
          setCreateModalOpen(false);
        }}
      />
    </>
  );
}

export default Home;
