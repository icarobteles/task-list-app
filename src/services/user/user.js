import { toast } from "react-toastify";
import instance from "../index";

const handleErrors = (error) => {
  switch (error) {
    case "User not found":
      toast.error("Usuário não encontrado!");
      break;
    case "Password is invalid":
      toast.error("Senha atual incorreta!");
      break;
    default:
      toast.error("Ocorreu algum erro!");
  }

  return false;
};

export const getUserData = async (userId, token) => {
  const response = await instance
    .get(`/user/${userId}`, { headers: { Authorization: `Bearer ${token}` } })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return handleErrors(error.response.data.error);
    });

  return response;
};

export const updateUser = async (userId, token, newData) => {
  const response = await instance
    .patch(`/user/${userId}`, newData, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      toast.success("Informações Atualizadas com Sucesso!");
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      return handleErrors(error.response.data.error);
    });

  return response;
};
