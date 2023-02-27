import React, { createContext, useState } from "react";
import { useEffect } from "react";
export const AppContext = createContext();

const GlobalState = ({ children }) => {
  const [globalState, setGlobalState] = useState([]);
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setApiData(data));
  }, []);
  return (
    <AppContext.Provider value={[globalState, apiData, setGlobalState]}>
      {children}
    </AppContext.Provider>
  );
};

export default GlobalState;
