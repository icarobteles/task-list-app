import { toast } from "react-toastify";
import instance from "../index";

const handleErrors = (error) => {
  switch (error) {
    case "Missing or invalid data":
      toast.error("Deve haver algum dado válido!");
      break;
    default:
      toast.error("Ocorreu algum erro!");
  }

  return false;
};

export const completeTask = async (taskId, token) => {
  const response = await instance
    .patch(
      `/task/${taskId}`,
      { isCompleted: true },
      { headers: { Authorization: `Bearer ${token}` } }
    )
    .then((response) => {
      toast.success(`Tarefa completa, parabéns!`);
      return response;
    })
    .catch((error) => {
      toast.error("Ocorreu algum erro!");
    });

  return response;
};

export const createTask = async (userId, token, data) => {
  const response = await instance
    .post(
      "/task",
      { ...data, author: userId },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    .then((response) => {
      toast.success(`Tarefa adicionada com sucesso!`);
      return response;
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

export const editTask = async (taskId, token, data) => {
  const response = await instance
    .patch(`/task/${taskId}`, data, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      toast.success(`Tarefa atualizada com sucesso!`);
      return response;
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

export const removeTask = async (taskId, token) => {
  const response = await instance
    .delete(`/task/${taskId}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      toast.success(`Tarefa removida com sucesso!`);
      return response;
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
