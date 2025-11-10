import { useContext } from "react";
import { Context, db } from "../contexts/Context";
import axios from "axios";

const useFetch = () => {
  const { setTodos, setFiltered } = useContext(Context);
  const fetchTodo = async () => {
    try {
      const response = await axios.get(db);
      setTodos(response.data);
      setFiltered(response.data.sort().reverse());
    } catch (error) {
      console.log(error);
    }
  };

  return { fetchTodo };
};

export default useFetch;
