import {
  createContext,
  useState,
  type Dispatch,
  type SetStateAction
} from "react";

export interface TodoTypes {
  _id: string;
  task: string;
  completed: boolean;
}

interface ChildrenTypes {
  children?: React.ReactElement;
}

interface ContextValueTypes {
  todos: TodoTypes[];
  setTodos: Dispatch<SetStateAction<TodoTypes[]>>;
  filtered: TodoTypes[];
  setFiltered: Dispatch<SetStateAction<TodoTypes[]>>;
  isShowFormAdd: boolean;
  setIsShowFormAdd: Dispatch<SetStateAction<boolean>>;
  active: string;
  setActive: Dispatch<SetStateAction<string>>;
}

// eslint-disable-next-line react-refresh/only-export-components
export const Context = createContext<ContextValueTypes>({
  setFiltered: () => {},
  todos: [],
  setTodos: () => {},
  filtered: [],
  setIsShowFormAdd: () => {},
  isShowFormAdd: false,
  setActive: () => {},
  active: "all"
});

const ContextProvider = ({ children }: ChildrenTypes) => {
  const [todos, setTodos] = useState<TodoTypes[]>([]);
  const [filtered, setFiltered] = useState<TodoTypes[]>([]);
  const [isShowFormAdd, setIsShowFormAdd] = useState<boolean>(false);
  const [active, setActive] = useState<string>("all");

  const ContextValue = {
    todos,
    setTodos,
    filtered,
    setFiltered,
    isShowFormAdd,
    setIsShowFormAdd,
    active,
    setActive
  };

  return <Context.Provider value={ContextValue}>{children}</Context.Provider>;
};

export default ContextProvider;
