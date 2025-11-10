import axios from "axios";
import { db } from "../contexts/Context";
import useFetch from "./useFetch";

const useDestroy = () => {
  const { fetchTodo } = useFetch();
  const handleDeleteTask = async (task_id: string) => {
    try {
      await axios.delete(`${db}/${task_id}`);
      await fetchTodo();
    } catch (error) {
      console.log(error);
    }
  };
  return { handleDeleteTask };
};

export default useDestroy;
