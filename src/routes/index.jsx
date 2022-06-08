import { Routes as RoutesFromRouterDOM, Route } from "react-router-dom";

//IMPORT PAGES
import LandingPage from "../pages/Landing";
import LoginPage from "../pages/Login";
import MainPage from "../pages/Main";
import ProfilePage from "../pages/Profile";
import RegisterPage from "../pages/Register";

const Routes = () => {
  return (
    <RoutesFromRouterDOM>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/admin/main" element={<MainPage />} />
      <Route path="/admin/profile" element={<ProfilePage />} />
    </RoutesFromRouterDOM>
  );
};

export default Routes;
