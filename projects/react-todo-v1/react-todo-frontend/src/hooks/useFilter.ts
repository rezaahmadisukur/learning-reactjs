import { useContext } from "react";
import { Context, type TodoTypes } from "../contexts/Context";

const useFilter = () => {
  const { todos, setActive, setFiltered } = useContext(Context);
  const handleFilter = (e: React.FormEvent<Element>) => {
    const target = (e.target as HTMLFormElement).value;
    const filter = todos.filter((todo: TodoTypes) => {
      switch (target) {
        case "uncompleted":
          setActive(target);
          return !todo.completed;
        case "completed":
          setActive(target);
          return todo.completed;
        default:
          setActive(target);
          return todos;
      }
    });
    setFiltered(filter);
  };
  return { handleFilter };
};

export default useFilter;
