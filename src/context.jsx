import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

const Context = ({ children }) => {
  const [theme, setTheme] = useState("light");

  function handleToggle() {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

  const value = {
    setTheme,
    handleToggle,
    theme,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default Context;
