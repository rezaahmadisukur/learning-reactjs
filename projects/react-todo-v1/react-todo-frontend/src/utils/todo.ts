import { useContext } from "react";
import { Context } from "../contexts/Context";
import axios from "axios";

interface TodoTypes {
  _id: string;
  task: string;
  completed: boolean;
}

const db = import.meta.env.VITE_DB_URL;

export const useHandleFilter = (e: React.FormEvent<Element>) => {
  const { setFiltered, todos } = useContext(Context);
  const target = (e.target as HTMLFormElement).value;
  const filter = todos.filter((todo: TodoTypes) => {
    switch (target) {
      case "uncompleted":
        return !todo.completed;
      case "completed":
        return todo.completed;
      default:
        return todos;
    }
  });
  setFiltered(filter);
};

export const useHandleNewTask = async (e: React.FormEvent<HTMLFormElement>) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { setIsShowFormAdd } = useContext(Context);
  e.preventDefault();
  const newTask = {
    task: (e.target as HTMLFormElement).newTask.value,
    completed: false
  };
  try {
    await axios.post(db, newTask);
    (e.target as HTMLFormElement).newTask.value = "";
    setIsShowFormAdd(false);
    // await fetchTodo();
  } catch (error) {
    console.log(error);
  }
};
