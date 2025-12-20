import axios from "axios";
import { db } from "../contexts/Context";
import useFetch from "./useFetch";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
// import withReactContent from "sweetalert2-react-content";

const useDestroy = () => {
  const { fetchTodo } = useFetch();
  const handleDeleteTask = async (task_id: string) => {
    withReactContent(Swal)
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      })
      .then(async (result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
          try {
            await axios.delete(`${db}/${task_id}`);
            await fetchTodo();
          } catch (error) {
            console.log(error);
          }
        }
      });
  };
  return { handleDeleteTask };
};

export default useDestroy;
