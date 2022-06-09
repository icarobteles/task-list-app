import { Button } from "./style";

import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useThemeManager } from "../../providers/theme";

const ChangeThemeButton = ({ left, right }) => {
  const { currentTheme, changeTheme } = useThemeManager();

  return (
    <Button onClick={() => changeTheme()} left={left} right={right}>
      <>
        {currentTheme === "dark" && (
          <MdLightMode size="2rem" color="var(--primary-color-900)" />
        )}
        {currentTheme === "light" && (
          <MdDarkMode size="2rem" color="var(--primary-color-100)" />
        )}
      </>
    </Button>
  );
};

export default ChangeThemeButton;
