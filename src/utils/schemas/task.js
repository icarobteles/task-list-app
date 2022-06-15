import * as yup from "yup";

export const editTaskSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório!"),
  priority: yup.string().required("Prioridade obrigatória!"),
  estimatedCompletedDate: yup.string(),
});
