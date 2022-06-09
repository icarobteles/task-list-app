import { useEffect, useState } from "react";
import Form from "../../components/Form";
import { registerSchema } from "../../utils/schemas/auth";
import { LogoContainer, RegisterContainer } from "./style";

import LogoDark from "../../assets/images/logoDark.svg";
import LogoLight from "../../assets/images/logoLight.svg";
import { useAuth } from "../../providers/auth";
import { useNavigate } from "react-router-dom";
import { useThemeManager } from "../../providers/theme";
import ChangeThemeButton from "../../components/ChangeTheme";

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
  const { currentLogo, changeTheme } = useThemeManager();
  let navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/admin/main");
    }
  }, [token]);

  return (
    <RegisterContainer>
      <Form
        inputsDetails={inputsDetails}
        setInputDetails={setInputDetails}
        schema={registerSchema}
      />
      <LogoContainer>
        <h1>
          Lista de Tarefas
          <span>Organize sua rotina de forma ágil e prática</span>
        </h1>
        <img src={currentLogo} alt="Logo da Aplicação" />
      </LogoContainer>
      <ChangeThemeButton right="15px" />
    </RegisterContainer>
  );
};

export default RegisterPage;
