import { createContext, useCallback, useContext, useState } from "react";

const ThemeManagerContext = createContext();

export const ThemeManagerProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState("dark");

  const getOpositeTheme = useCallback(
    () => (currentTheme === "light" ? "dark" : "light"),
    [currentTheme]
  );

  const changeTheme = () => {
    setCurrentTheme(getOpositeTheme());
  };

  return (
    <ThemeManagerContext.Provider value={{ currentTheme, changeTheme }}>
      {children}
    </ThemeManagerContext.Provider>
  );
};

export const useThemeManager = () => useContext(ThemeManagerContext);
