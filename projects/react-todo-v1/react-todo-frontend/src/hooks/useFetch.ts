import { useCallback, useContext } from "react";
import { Context, db } from "../contexts/Context";
import axios from "axios";

const useFetch = () => {
  const { setTodos } = useContext(Context);
  const fetchTodo = useCallback(async () => {
    try {
      const response = await axios.get(db);
      setTodos(response.data.sort().reverse());
    } catch (error) {
      console.log(error);
    }
  }, [setTodos]);

  return { fetchTodo };
};

export default useFetch;
