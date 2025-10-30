import { createContext, useRef, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const Context = createContext();

const ContextProvider = ({ children }) => {
  const topAnimeSwiperRef = useRef(null);
  const topMangaSwiperRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  const ContextValue = {
    topAnimeSwiperRef,
    topMangaSwiperRef,
    isLoading,
    setIsLoading
  };
  return <Context.Provider value={ContextValue}>{children}</Context.Provider>;
};

export default ContextProvider;
