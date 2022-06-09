import { useEffect, useState } from "react";
import Form from "../../components/Form";
import loginSchema from "../../utils/schemas/auth";
import { LoginContainer, LogoContainer } from "./style";
import { useAuth } from "../../providers/auth";
import { useNavigate } from "react-router-dom";
import { useThemeManager } from "../../providers/theme";
import ChangeThemeButton from "../../components/ChangeTheme";

const LoginPage = () => {
  const [inputsDetails, setInputDetails] = useState([
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
  ]);

  const { token } = useAuth();
  const { currentLogo } = useThemeManager();
  let navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/admin/main");
    }
  }, [token]);

  return (
    <LoginContainer>
      <LogoContainer>
        <img src={currentLogo} alt="Logo da Aplicação" />
        <h1>
          Lista de Tarefas
          <span>Organize sua rotina de forma ágil e prática</span>
        </h1>
      </LogoContainer>
      <Form
        inputsDetails={inputsDetails}
        setInputDetails={setInputDetails}
        schema={loginSchema}
      />
      <ChangeThemeButton left="15px" />
    </LoginContainer>
  );
};

export default LoginPage;
