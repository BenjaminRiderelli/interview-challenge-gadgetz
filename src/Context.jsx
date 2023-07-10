import { useState, createContext, useEffect } from "react";
import { useAllProductsData } from "./datafetching/api";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const onSuccess = (data) => {
    console.log(data);
  };

  const onError = (error) => {
    console.log(error);
  };

  const {
    data: allProductsData,
    isLoading: allProductsIsLoading,
    isError: allProductsIsError,
  } = useAllProductsData(onSuccess, onError);

  return (
    <Context.Provider
      value={{
        allProductsData,
        allProductsIsLoading,
        allProductsIsError,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
