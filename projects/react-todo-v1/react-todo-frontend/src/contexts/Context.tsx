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

export interface TodoTypes {
  _id: string;
  task: string;
  completed: boolean;
}

// eslint-disable-next-line react-refresh/only-export-components
export const db = import.meta.env.VITE_DB_URL;

interface ChildrenTypes {
  children?: React.ReactElement;
}

interface ContextValueTypes {
  todos: TodoTypes[];
  setTodos: Dispatch<SetStateAction<TodoTypes[]>>;
  isShowFormAdd: boolean;
  setIsShowFormAdd: Dispatch<SetStateAction<boolean>>;
  active: string;
  setActive: Dispatch<SetStateAction<string>>;
  isShowFormEdit: boolean;
  setIsShowFormEdit: Dispatch<SetStateAction<boolean>>;
  target: string;
  setTarget: Dispatch<SetStateAction<string>>;
  showFormAddError: boolean;
  setShowFormAddError: Dispatch<SetStateAction<boolean>>;
}

// eslint-disable-next-line react-refresh/only-export-components
export const Context = createContext<ContextValueTypes>({
  setTodos: () => {},
  todos: [],
  setIsShowFormAdd: () => {},
  isShowFormAdd: false,
  setActive: () => {},
  active: "all",
  setIsShowFormEdit: () => {},
  isShowFormEdit: false,
  setTarget: () => {},
  target: "all",
  setShowFormAddError: () => {},
  showFormAddError: false
});

const ContextProvider = ({ children }: ChildrenTypes) => {
  const [todos, setTodos] = useState<TodoTypes[]>([]);
  const [isShowFormAdd, setIsShowFormAdd] = useState<boolean>(false);
  const [isShowFormEdit, setIsShowFormEdit] = useState<boolean>(false);
  const [showFormAddError, setShowFormAddError] = useState<boolean>(false);
  const [target, setTarget] = useState<string>("all");
  const [active, setActive] = useState<string>("all");

  const ContextValue = {
    todos,
    setTodos,
    isShowFormAdd,
    setIsShowFormAdd,
    active,
    setActive,
    isShowFormEdit,
    setIsShowFormEdit,
    target,
    setTarget,
    showFormAddError,
    setShowFormAddError
  };

  return <Context.Provider value={ContextValue}>{children}</Context.Provider>;
};

export default ContextProvider;
