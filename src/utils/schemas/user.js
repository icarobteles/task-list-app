import * as yup from "yup";

export const changePasswordSchema = yup.object().shape({
  currentPassword: yup
    .string()
    .required("Senha Atual Obrigatória")
    .trim("Senha Atual Obrigatória"),
  newPassword: yup
    .string()
    .required("Nova Senha Obrigatória")
    .trim()
    .notOneOf(
      [yup.ref("currentPassword")],
      "A nova senha deve ser diferente da atual"
    ),
  passwordConfirmation: yup
    .string()
    .trim()
    .oneOf([yup.ref("newPassword")], "Senhas Incompatíveis"),
});

export const personalInfosSchema = yup.object().shape({
  name: yup
    .string()
    .required("Nome Obrigatório")
    .trim("Nome Obrigatório")
    .trim(),
  email: yup
    .string()
    .required("Email Obrigatório")
    .email("Email Inválido")
    .trim(),
  currentPassword: yup.string().required("Senha Atual Obrigatória").trim(),
});
