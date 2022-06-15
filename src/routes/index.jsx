import { Routes as RoutesFromRouterDOM, Route } from "react-router-dom";

//IMPORT PAGES
import LoginPage from "../pages/Login";
import MainPage from "../pages/Main";
import ProfilePage from "../pages/Profile";
import RegisterPage from "../pages/Register";

const Routes = () => {
  return (
    <RoutesFromRouterDOM>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/admin/main" element={<MainPage />} />
      <Route path="/admin/profile" element={<ProfilePage />} />
    </RoutesFromRouterDOM>
  );
};

export default Routes;
