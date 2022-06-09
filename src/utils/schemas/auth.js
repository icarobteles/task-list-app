import * as yup from "yup";

export const registerSchema = yup.object().shape({
  name: yup.string().required("Nome Obrigatório").trim(),
  email: yup
    .string()
    .required("Email Obrigatório")
    .email("Email Inválido")
    .trim(),
  password: yup
    .string()
    .required("Senha Obrigatória")
    .trim()
    .matches(/(?=.*[A-Z])/, "A senha deve ter, no mínimo, uma letra maiúscula")
    .matches(/^(?=.*[a-z])/, "A senha deve ter, no mínimo, uma letra minúscula")
    .matches(/(?=.*[0-9])/, "A senha deve ter, no mínimo, um número")
    .matches(
      /(?=.*[!@#$%^&*.])/,
      "A senha deve ter, no mínimo, um caractere especial"
    )
    .min(8, "A senha deve ter, no mínimo, 8 caracteres"),
  passwordConfirmation: yup
    .string()
    .trim()
    .oneOf([yup.ref("password")], "Senhas Incompatíveis"),
});

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email Obrigatório")
    .email("Email Inválido")
    .trim(),
  password: yup.string().required("Senha Obrigatória").trim(),
});

export default loginSchema;
