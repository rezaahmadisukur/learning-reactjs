import axios from "axios";
import { Context, db } from "../contexts/Context";
import { useContext } from "react";
import useFetch from "./useFetch";
import { toast } from "react-toastify";

const useUpdate = () => {
  const { setIsShowFormEdit, todos } = useContext(Context);
  const { fetchTodo } = useFetch();
  const handleUpdateTask = async (
    e: React.FormEvent | React.ChangeEvent<HTMLInputElement>,
    task_id: string
  ) => {
    e.preventDefault();
    const editTask = {
      task: (e.target as HTMLFormElement).editTask.value
    };
    const prevTask = todos.find((todo) => todo._id === task_id);
    if (editTask.task === "" || editTask.task === prevTask?.task) {
      return false;
    }
    try {
      await axios.put(`${db}/${task_id}`, editTask);
      setIsShowFormEdit(false);
      toast.success("Successfully update task", {
        position: "bottom-right"
      });
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
      if (!editTask.completed) {
        return false;
      }
      toast.success("Successfully checked task", {
        position: "bottom-right"
      });
      await fetchTodo();
    } catch (error) {
      console.log(error);
    }
  };

  return { handleUpdateTask, handleChecked };
};

export default useUpdate;
