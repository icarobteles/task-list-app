import { Button } from "./style";

import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useThemeManager } from "../../providers/theme";

const ChangeThemeButton = ({
  left,
  right,
  position = "absolute",
  backgroundColor,
}) => {
  const { currentTheme, changeTheme } = useThemeManager();

  return (
    <Button
      onClick={() => changeTheme()}
      left={left}
      right={right}
      position={position}
      backgroundColor={backgroundColor}
    >
      <>
        {currentTheme === "dark" && (
          <MdLightMode size="2rem" className="themeModeIco" />
        )}
        {currentTheme === "light" && (
          <MdDarkMode size="2rem" className="themeModeIco" />
        )}
      </>
    </Button>
  );
};

export default ChangeThemeButton;
