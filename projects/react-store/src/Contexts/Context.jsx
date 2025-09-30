import { createContext, useEffect, useState } from "react";
import { getAllProducts } from "../services/service";
import { useSelector } from "react-redux";

// eslint-disable-next-line react-refresh/only-export-components
export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const [search, setSearch] = useState("");
  const [checkbox, setCheckbox] = useState([]);
  const [selectOpt, setSelectOpt] = useState("");
  const cart = useSelector((state) => state.cart.data);

  useEffect(() => {
    getAllProducts((data) => {
      setProducts(data);
    });
  }, [setProducts]);

  const ContextValue = {
    products,
    setProducts,
    subTotal,
    setSubTotal,
    search,
    setSearch,
    checkbox,
    setCheckbox,
    selectOpt,
    setSelectOpt,
    cart
  };
  return (
    <>
      <Context.Provider value={ContextValue}>{children}</Context.Provider>
    </>
  );
};

export default ContextProvider;
