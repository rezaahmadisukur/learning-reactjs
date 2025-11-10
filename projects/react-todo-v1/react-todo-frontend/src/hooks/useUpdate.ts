import axios from "axios";
import { Context, db } from "../contexts/Context";
import { useContext } from "react";
import useFetch from "./useFetch";

const useUpdate = () => {
  const { setIsShowFormEdit } = useContext(Context);
  const { fetchTodo } = useFetch();
  const handleUpdateTask = async (
    e: React.FormEvent | React.ChangeEvent<HTMLInputElement>,
    task_id: string
  ) => {
    e.preventDefault();
    const editTask = {
      task: (e.target as HTMLFormElement).editTask.value
    };
    try {
      await axios.put(`${db}/${task_id}`, editTask);
      setIsShowFormEdit(false);
      await fetchTodo();
    } catch (error) {
      console.log(error);
    }
  };

  const handleChecked = async (
    e: React.ChangeEvent<HTMLInputElement>,
    task_id: string
  ) => {
    e.preventDefault();
    const editTask = {
      completed: (e.target as HTMLInputElement).checked
    };
    try {
      await axios.put(`${db}/${task_id}`, editTask);
      await fetchTodo();
    } catch (error) {
      console.log(error);
    }
  };

  return { handleUpdateTask, handleChecked };
};

export default useUpdate;
