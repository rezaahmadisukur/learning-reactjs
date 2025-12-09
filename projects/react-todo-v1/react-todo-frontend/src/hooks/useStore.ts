import { useContext } from "react";
import { Context, db } from "../contexts/Context";
import axios from "axios";
import useFetch from "./useFetch";
import { toast } from "react-toastify";

interface MyErrorResponse {
  message: string;
}

const useStore = () => {
  const { setIsShowFormAdd, setShowFormAddError } = useContext(Context);
  const { fetchTodo } = useFetch();

  const handleNewTask = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTask = {
      task: (e.target as HTMLFormElement).newTask.value,
      completed: false
    };
    if (newTask.task === "") {
      setShowFormAddError(true);
      return false;
    }

    try {
      await axios.post(db, newTask);
      (e.target as HTMLFormElement).newTask.value = "";
      toast.success("Successfully add task", {
        position: "bottom-right"
      });
      setIsShowFormAdd(false);
      setShowFormAddError(false);
      await fetchTodo();
    } catch (error) {
      if (axios.isAxiosError<MyErrorResponse>(error)) {
        console.log(error.response?.data.message);
      }
    }
  };

  return { handleNewTask };
};

export default useStore;
