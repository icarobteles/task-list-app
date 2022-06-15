import { createContext, useCallback, useContext, useState } from "react";
import logoDark from "../../assets/images/logoDark.svg";
import logoLight from "../../assets/images/logoLight.svg";

const ThemeManagerContext = createContext();

export const ThemeManagerProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState("dark");
  const [currentLogo, setCurrentLogo] = useState(logoDark);
  const [opositeLogo, setOpositeLogo] = useState(logoLight);

  const getOpositeTheme = useCallback(
    () => (currentTheme === "light" ? "dark" : "light"),
    [currentTheme]
  );

  const getOpositeLogo = useCallback(
    () => (currentTheme === "light" ? logoDark : logoLight),
    [currentTheme]
  );

  const changeTheme = () => {
    setCurrentTheme(getOpositeTheme());
    setOpositeLogo(currentLogo);
    setCurrentLogo(getOpositeLogo());
  };

  return (
    <ThemeManagerContext.Provider
      value={{ currentTheme, changeTheme, currentLogo, opositeLogo }}
    >
      {children}
    </ThemeManagerContext.Provider>
  );
};

export const useThemeManager = () => useContext(ThemeManagerContext);
