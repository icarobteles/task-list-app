import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import loginSchema from "../../utils/schemas/auth";
import { useAuth } from "../../providers/auth";

//COMPONENTS
import ChangeThemeButton from "../../components/ChangeTheme";
import Form from "../../components/Form";
import Logo from "../../components/Logo";

//STYLED-COMPONENTS
import { LoginContainer } from "./style";

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
  let navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/admin/main");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <LoginContainer>
      <Logo flexReverse />
      <Form
        inputsDetails={inputsDetails}
        setInputDetails={setInputDetails}
        schema={loginSchema}
        formConfig={{ formType: "login", formName: "Login" }}
      />
      <ChangeThemeButton left="15px" />
    </LoginContainer>
  );
};

export default LoginPage;
