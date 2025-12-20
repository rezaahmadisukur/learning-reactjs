import { useContext } from "react";
import { Context } from "../contexts/Context";
import useFilter from "../hooks/useFilter";

interface TypeProps {
  value?: string;
  children?: React.ReactNode;
}

const ListCategory = (props: TypeProps) => {
  const { children, value } = props;
  const { active } = useContext(Context);
  const { handleFilter } = useFilter();

  return (
    <div>
      <button
        className={`px-3 py-1  text-primary rounded-full hover:text-zinc-900 hover:bg-zinc-200 transition-all duration-300 cursor-pointer ${
          value == active && "bg-primary text-zinc-100"
        }`}
        value={value}
        onClick={(e) => {
          handleFilter(e);
        }}
      >
        {children}
      </button>
    </div>
  );
};

export default ListCategory;
