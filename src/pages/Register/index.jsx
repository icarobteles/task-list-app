import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { registerSchema } from "../../utils/schemas/auth";
import { useAuth } from "../../providers/auth";

//COMPONENTS
import Form from "../../components/Form";
import ChangeThemeButton from "../../components/ChangeTheme";
import Logo from "../../components/Logo";

//STYLED COMPONENTS
import { RegisterContainer } from "./style";

const RegisterPage = () => {
  const [inputsDetails, setInputDetails] = useState([
    {
      type: "text",
      name: "name",
      id: "name",
      placeholder: "Nome Completo *",
    },
    {
      type: "email",
      name: "email",
      id: "email",
      placeholder: "Email *",
    },
    {
      type: "password",
      name: "password",
      id: "password",
      placeholder: "Senha *",
    },
    {
      type: "password",
      name: "passwordConfirmation",
      id: "passwordConfirmation",
      placeholder: "Confirme sua Senha *",
    },
  ]);

  const { token } = useAuth();
  let navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/admin/main");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <RegisterContainer>
      <Form
        inputsDetails={inputsDetails}
        setInputDetails={setInputDetails}
        schema={registerSchema}
        formConfig={{ formType: "register", formName: "Cadastro" }}
      />
      <Logo />
      <ChangeThemeButton right="15px" />
    </RegisterContainer>
  );
};

export default RegisterPage;
