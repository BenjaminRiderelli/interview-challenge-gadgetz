import { useState, createContext, useEffect } from "react";
import { useAllProductsData } from "./datafetching/api";

export const Context = createContext();

export const ContextProvider = ({ children }) => {

  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);




  const onSuccessAllProducts = (data) => {
    // console.log(data);
  };

  const onErrorAllProducts = (error) => {
    console.log(error);
  };

  const {
    data: allProducts,
    isLoading: allProductsIsLoading,
    isError: allProductsIsError,
  } = useAllProductsData(onSuccessAllProducts, onErrorAllProducts);

  
  const allProductsData = allProducts?.data
  return (
    <Context.Provider
      value={{
        allProductsData,
        allProductsIsLoading,
        allProductsIsError,
        screenSize
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
