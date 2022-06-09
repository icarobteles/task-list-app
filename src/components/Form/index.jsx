import {
  Account,
  Button,
  FormContainer,
  InputContainer,
  Input,
  ShowError,
} from "./style";

//VALIDATION FORM
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useLocation } from "react-router-dom";
import ShowPassword from "../ShowPassword";
import { useAuth } from "../../providers/auth";
import { useUser } from "../../providers/user";

const Form = ({ inputsDetails, setInputDetails, schema, setRender }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { handleAuth } = useAuth();
  const { changeUserInfos } = useUser();

  let location = useLocation();
  const formType = location.pathname;
  const formName =
    formType === "/login"
      ? "Login"
      : formType === "/register"
      ? "Cadastro"
      : "Editar";

  const onSubmit = async (data) => {
    if (formType === "/login") {
      //LOGIN
      await handleAuth(data, "/auth/login");
    } else if (formType === "/register") {
      //REGISTER
      await handleAuth(data, "/auth/register");
    } else {
      //UPDATE USERINFOS
      let newData = { ...data };
      if (newData.passwordConfirmation) {
        newData.passwordConfirmation = undefined;
      }
      const response = await changeUserInfos(newData);
      if (response) {
        setRender("personalInfoCard");
      }
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <h2>{formName}</h2>

      {inputsDetails.map((inputDetail, index) => (
        <>
          <InputContainer
            key={`${formType}Form${inputDetail.name}`}
            error={errors[inputDetail.name]}
          >
            <Input
              {...inputDetail}
              error={errors[inputDetail.name]}
              {...register(inputDetail.name)}
            />
            {inputDetail.name.match(/[pP]assword/) && (
              <ShowPassword
                error={errors[inputDetail.name]}
                inputDetail={inputDetail}
                setInputDetails={setInputDetails}
              />
            )}
          </InputContainer>
          {errors[inputDetail.name] && (
            <ShowError key={`${formType}FormError${inputDetail.name}`}>
              {errors[inputDetail.name].message}
            </ShowError>
          )}
        </>
      ))}

      <Button type="submit" errors={Object.keys(errors).length}>
        {formName}
      </Button>
      <Account>
        {formType === "/register" && (
          <>
            Já tem uma conta?
            <strong>
              <Link to="/login">Faça seu login aqui</Link>
            </strong>
          </>
        )}
        {formType === "/login" && (
          <>
            Ainda não tem uma conta?
            <strong>
              <Link to="/register">Faça seu cadastro aqui</Link>
            </strong>
          </>
        )}
        {formType === "/admin/profile" && (
          <>
            <strong>
              <button
                type="button"
                onClick={() => setRender("personalInfoCard")}
              >
                Ver Minhas Informações
              </button>
            </strong>
          </>
        )}
      </Account>
    </FormContainer>
  );
};

export default Form;
