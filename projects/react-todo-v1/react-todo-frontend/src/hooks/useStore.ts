import { useContext } from "react";
import { Context, db } from "../contexts/Context";
import axios from "axios";
import useFetch from "./useFetch";

const useStore = () => {
  const { setIsShowFormAdd } = useContext(Context);
  const { fetchTodo } = useFetch();

  const handleNewTask = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTask = {
      task: (e.target as HTMLFormElement).newTask.value,
      completed: false
    };
    try {
      await axios.post(db, newTask);
      (e.target as HTMLFormElement).newTask.value = "";
      setIsShowFormAdd(false);
      await fetchTodo();
    } catch (error) {
      console.log(error);
    }
  };

  return { handleNewTask };
};

export default useStore;
