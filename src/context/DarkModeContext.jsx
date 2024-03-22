/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// Follow the same recipe that you use to build a context!
import { createContext, useContext, useEffect } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

// STEP 1.
const DarkModeContext = createContext();

// STEP 2.
function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(false, "isDarkMode");

  // Side Effect to add a class to the HTML element!
  useEffect(
    function () {
      if (isDarkMode) {
        document.documentElement.classList.add("dark-mode");
        document.documentElement.classList.remove("light-mode");
      } else {
        document.documentElement.classList.add("light-mode");
        document.documentElement.classList.remove("dark-mode");
      }
    },
    [isDarkMode]
  );

  function toggleDarkMode() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

// STEP 3.
function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (context === "undefined")
    throw new Error("DarkModeContext was used outside of DarkModeProvider!");
  return context;
}

export { DarkModeProvider, useDarkMode };
