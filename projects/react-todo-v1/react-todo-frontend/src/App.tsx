import {
  Check,
  Circle,
  CircleCheck,
  ListChecks,
  Pencil,
  Plus,
  Trash2,
  X
} from "lucide-react";
import CardHeader from "./components/CardHeader";
import Header from "./components/Header";
import { useContext, useEffect, useState } from "react";
import ListCategory from "./components/ListCategory";
import { Context, type TodoTypes } from "./contexts/Context";
import useStore from "./hooks/useStore";
import useFetch from "./hooks/useFetch";
import useUpdate from "./hooks/useUpdate";
import useDestroy from "./hooks/useDestroy";

const categories = [
  { id: "1", name: "all", label: "All Task" },
  { id: "2", name: "uncompleted", label: "Active" },
  { id: "3", name: "completed", label: "Completed" }
];

const App = () => {
  const {
    todos,
    target,
    setActive,
    isShowFormAdd,
    isShowFormEdit,
    setIsShowFormAdd,
    setIsShowFormEdit,
    showFormAddError
  } = useContext(Context);
  const [id, setId] = useState<string>("");
  const { handleNewTask } = useStore();
  const { fetchTodo } = useFetch();
  const { handleUpdateTask, handleChecked } = useUpdate();
  const { handleDeleteTask } = useDestroy();
  const [filteredData, setFilteredData] = useState<TodoTypes[]>([]);

  useEffect(() => {
    const filterData = todos.filter((todo: TodoTypes) => {
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

    setFilteredData(filterData);
    fetchTodo();
  }, [fetchTodo, todos, target, setActive]);

  return (
    <div className="w-1/2 mx-auto my-10">
      <Header />

      {/* Card Task Completed */}
      <div className="grid grid-cols-3 gap-5 my-10">
        <CardHeader title="Total" count={todos.length}>
          <ListChecks />
        </CardHeader>
        <CardHeader
          title="Active"
          count={todos?.filter((todo) => !todo.completed).length}
        >
          <Circle />
        </CardHeader>
        <CardHeader
          title="Done"
          count={todos?.filter((todo) => todo.completed).length}
        >
          <CircleCheck />
        </CardHeader>
      </div>

      {/* Bar Task */}
      <div className="bg-white p-3 rounded-lg flex gap-3">
        {categories?.length > 0 &&
          categories?.map((category) => (
            <div key={category.id}>
              <ListCategory value={category.name}>
                {category.label}
              </ListCategory>
            </div>
          ))}
      </div>

      {/* Form Add Task */}
      {isShowFormAdd ? (
        <form
          className="w-full bg-white my-5 p-5 rounded-lg"
          onSubmit={handleNewTask}
        >
          <input
            type="text"
            name="newTask"
            id="newTask"
            placeholder="What needs to be done?"
            autoComplete="off"
            className="w-full border-2 border-primary rounded h-12 px-5 focus:border-primary placeholder:text-sm text-sm"
          />
          {showFormAddError && (
            <p className="text-xs text-red-500 m-2 italic">
              Input form must be required
            </p>
          )}
          <div className="flex w-full gap-5 my-3">
            <button
              type="submit"
              className="flex gap-3 bg-primary w-11/12 justify-center items-center py-2 rounded-lg text-white hover:opacity-90 transition-all duration-300 cursor-pointer disabled:opacity-50"
            >
              <Plus className="w-4 h-4" />
              Add Task
            </button>
            <button
              type="button"
              className="w-1/12 border border-slate-300 flex justify-center items-center rounded-lg cursor-pointer hover:bg-slate-300 transition-all duration-300"
              onClick={() => setIsShowFormAdd(false)}
            >
              <X className="w-4" />
            </button>
          </div>
        </form>
      ) : (
        <button
          className="bg-primary text-white w-full my-10 py-3 rounded-lg flex justify-center items-center gap-5 hover:opacity-90 cursor-pointer transition-all duration-300"
          onClick={() => setIsShowFormAdd(true)}
        >
          <Plus className="w-4 h-4" />
          Add New Task
        </button>
      )}

      {/* Task Todo */}
      <div className="flex flex-col gap-5">
        {filteredData.length > 0 &&
          filteredData.map((todo: TodoTypes) => (
            <div
              key={todo._id}
              className="bg-white p-4 rounded-lg hover:shadow-sm hover:-translate-y-0.5 transition-all duration-300 flex justify-between items-center overflow-hidden group"
            >
              {isShowFormEdit && id == todo._id ? (
                <form
                  className="flex items-center justify-between w-full gap-2"
                  onSubmit={(e) => handleUpdateTask(e, todo._id)}
                >
                  <input
                    type="text"
                    name="editTask"
                    defaultValue={todo.task}
                    className="border-2 w-full border-primary px-5 py-2 rounded-md"
                  />
                  <div className="flex items-center gap-1">
                    <button
                      type="submit"
                      className="cursor-pointer py-2 px-3 rounded bg-primary hover:bg-primary/90 transition-all duration-300"
                    >
                      <Check className="size-6 text-white" />
                    </button>
                    <button
                      onClick={() => setIsShowFormEdit(false)}
                      className="cursor-pointer py-2 px-3 rounded border border-slate-300 hover:bg-slate-300 transition-all duration-300"
                    >
                      <X className="size-6" />
                    </button>
                  </div>
                </form>
              ) : (
                <div className="flex justify-between w-full">
                  <label
                    htmlFor={`checkbox-${todo._id}`}
                    className="flex items-center gap-3 text-lg text-slate-700 w-full"
                  >
                    <div className="w-fit h-fit flex items-center relative">
                      <input
                        type="checkbox"
                        checked={todo.completed}
                        id={`checkbox-${todo._id}`}
                        name={`checkbox-${todo._id}`}
                        onChange={(e) => handleChecked(e, todo._id)}
                        className="w-6 h-6 appearance-none checked:bg-primary border-2 border-primary rounded peer"
                      />
                      <Check className="absolute text-white" />
                    </div>
                    <span
                      className={`${
                        todo.completed && "line-through text-slate-400"
                      }`}
                    >
                      {todo.task}
                    </span>
                  </label>
                  <span className="flex gap-1 translate-y-20 group-hover:translate-y-0 transition-all duration-500">
                    <button className="p-1 rounded hover:bg-primary/20 transition-all duration-500">
                      <Pencil
                        className="size-5 cursor-pointer text-primary"
                        onClick={() => {
                          setId(todo._id);
                          setIsShowFormEdit(true);
                        }}
                      />
                    </button>
                    <button className="p-1 rounded hover:bg-red-600/20 transition-all duration-500">
                      <Trash2
                        className="size-5 cursor-pointer text-red-600"
                        onClick={() => handleDeleteTask(todo._id)}
                      />
                    </button>
                  </span>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default App;
