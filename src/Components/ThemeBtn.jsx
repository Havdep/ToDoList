import React, { useContext } from "react";
import { GlobalContext } from "../context";

function ThemeBtn() {
  const { theme, setTheme, handleToggle } = useContext(GlobalContext);
  return (
    <>
      <button onClick={handleToggle}>Change Theme</button>
    </>
  );
}

export default ThemeBtn;
