import { createContext, useContext, useEffect, useState } from "react";
import { getUserData, updateUser } from "../../services/user/user";
import { useAuth } from "../auth";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const { token, userId } = useAuth();
  const [userInfos, setUserInfos] = useState({
    name: "",
    email: "",
    tasks: [],
  });

  const getUserInfos = async () => {
    const response = await getUserData(userId, token);

    if (response) {
      setUserInfos(response);
    }
  };

  const changeUserInfos = async (newData) => {
    await updateUser(userId, token, newData);
    const response = await getUserInfos(userId, token);

    if (response) {
      setUserInfos(response);
    }
  };

  useEffect(() => {
    if (token && userId) {
      getUserInfos();
    }
  }, [token, userId]);

  return (
    <UserContext.Provider value={{ userInfos, getUserInfos, changeUserInfos }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
