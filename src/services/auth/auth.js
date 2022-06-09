import { toast } from "react-toastify";
import instance from "../index";

const handleSuccess = (response, type) => {
  window.localStorage.setItem("@TaskList:token", response.data.token);
  window.localStorage.setItem("@TaskList:userId", response.data.user._id);
  toast.success(`${type} realizado com sucesso!`);
  return response.data;
};

const handleErrors = (error) => {
  switch (error) {
    case "Email already registered":
      toast.error("Email já cadastrado!");
      break;
    case "User does not exist":
      toast.error("Email não cadastrado!");
      break;
    case "Password is invalid":
      toast.error("Senha incorreta!");
      break;
    default:
      toast.error("Ocorreu algum erro!");
  }

  return false;
};

export const auth = async (data, route) => {
  const type = route === "/auth/register" ? "Cadastro" : "Login";
  const response = await instance
    .post(route, data)
    .then((response) => {
      return handleSuccess(response, type);
    })
    .catch((error) => {
      if (error.response.data?.error) {
        return handleErrors(error.response.data.error);
      } else {
        toast.error("Ocorreu algum erro!");
      }
    });

  return response;
};
