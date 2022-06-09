import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../../services/auth/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("@TaskList:token"));
  const [userId, setUserId] = useState(
    localStorage.getItem("@TaskList:userId")
  );

  const handleAuth = async (data, route) => {
    const response = await auth(data, route);

    if (response) {
      const { token, user } = response;
      setToken(token);
      setUserId(user._id);
    }
  };

  const logout = async () => {
    setToken(null);
    setUserId(null);
    localStorage.removeItem("@TaskList:token");
    localStorage.removeItem("@TaskList:userId");
  };

  useEffect(() => {
    setToken(localStorage.getItem("@TaskList:token"));
    setUserId(localStorage.getItem("@TaskList:userId"));
  }, []);

  return (
    <AuthContext.Provider value={{ token, userId, handleAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
