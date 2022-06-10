import { MenuContainer } from "./style";

import { IoLogOut, IoListCircleSharp } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";

import { useAuth } from "../../providers/auth";
import { useThemeManager } from "../../providers/theme";
import ChangeThemeButton from "../ChangeTheme";
import { Link, useLocation } from "react-router-dom";
import { useCallback } from "react";

const Menu = () => {
  const { logout } = useAuth();
  const { opositeLogo } = useThemeManager();

  let location = useLocation();
  const pathname = location.pathname;

  const getOpositePath = useCallback(
    () => (pathname === "/admin/profile" ? "/admin/main" : "/admin/profile"),
    [pathname]
  );

  return (
    <MenuContainer>
      <div className="logoContainer">
        <img src={opositeLogo} className="logo" alt="Logo da Aplicação" />
      </div>
      <div className="menuContainer">
        <ChangeThemeButton position="normal" backgroundColor="none" />
        <button>
          <Link to={getOpositePath()}>
            {pathname === "/admin/main" && (
              <FaUserCircle size="2rem" className="ico" />
            )}
            {pathname === "/admin/profile" && (
              <IoListCircleSharp size="2rem" className="ico" />
            )}
          </Link>
        </button>
        <button onClick={logout}>
          <IoLogOut size="2rem" className="ico" />
        </button>
      </div>
    </MenuContainer>
  );
};

export default Menu;
