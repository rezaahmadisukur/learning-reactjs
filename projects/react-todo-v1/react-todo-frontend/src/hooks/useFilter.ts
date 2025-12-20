import { useContext } from "react";
import { Context } from "../contexts/Context";

const useFilter = () => {
  const { setTarget } = useContext(Context);
  const handleFilter = (e: React.FormEvent<Element>) => {
    const target = (e.target as HTMLFormElement).value;
    setTarget(target);
  };
  return { handleFilter };
};

export default useFilter;
