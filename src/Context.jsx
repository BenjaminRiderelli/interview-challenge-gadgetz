import { useState, createContext, useEffect } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const contextCheck = "hey";

  return (
    <Context.Provider value={{ contextCheck }}> {children}</Context.Provider>
  );
};

export default Context;
