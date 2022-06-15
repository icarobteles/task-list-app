import { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";

import { useAuth } from "../../providers/auth";
import { useUser } from "../../providers/user";
import { useThemeManager } from "../../providers/theme";
import { createTask, editTask } from "../../services/task/task";

//COMPONENTS
import ShowPassword from "../ShowPassword";

//STYLED COMPONENTS
import {
  Account,
  Button,
  FormContainer,
  InputContainer,
  Input,
  ShowError,
  Select,
} from "./style";

//VALIDATION FORM
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const Form = ({
  inputsDetails,
  setInputDetails,
  schema,
  task,
  setClose,
  formConfig,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { handleAuth, token, userId } = useAuth();
  const { changeUserInfos, getUserInfos } = useUser();
  const { currentTheme } = useThemeManager();

  const { formType, formName } = formConfig;

  const onSubmit = async (data) => {
    if (formType === "login") {
      //LOGIN
      await handleAuth(data, "/auth/login");
    } else if (formType === "register") {
      //REGISTER
      await handleAuth(data, "/auth/register");
    } else if (formType === "updateUserInfos") {
      //UPDATE USERINFOS
      let newData = { ...data };
      if (newData.passwordConfirmation) {
        newData.passwordConfirmation = undefined;
      }
      await changeUserInfos(newData);
    } else if (formType === "editTask") {
      let newData = { ...data, isCompleted: task.isCompleted };
      if (data.estimatedCompletedDate === "") {
        newData.estimatedCompletedDate = undefined;
      }
      await editTask(task._id, token, newData);
      await getUserInfos();
      setClose();
    } else if (formType === "addTask") {
      await createTask(userId, token, data);
      await getUserInfos();
      setClose();
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <h2>{formName}</h2>

      {inputsDetails.map((inputDetail, index) => (
        <Fragment key={`${formType}Form${inputDetail.name}[${index}]`}>
          <InputContainer
            error={errors[inputDetail.name || inputDetail.select.name]}
          >
            {inputDetail.type === "select" ? (
              <Select
                {...inputDetail.select}
                error={errors[inputDetail.select.name]}
                {...register(inputDetail.select.name)}
              >
                <option value="" disabled>
                  {inputDetail.placeholder}
                </option>
                {inputDetail.options.map((option) => (
                  <option value={option}>{option}</option>
                ))}
              </Select>
            ) : (
              <Input
                currentTheme={currentTheme}
                {...inputDetail}
                error={errors[inputDetail.name]}
                {...register(inputDetail.name)}
              />
            )}
            {inputDetail.name?.match(/[pP]assword/) && (
              <ShowPassword
                error={errors[inputDetail.name]}
                inputDetail={inputDetail}
                setInputDetails={setInputDetails}
              />
            )}
          </InputContainer>
          {errors[inputDetail.name || inputDetail.select.name] && (
            <ShowError>
              {errors[inputDetail.name || inputDetail.select.name].message}
            </ShowError>
          )}
        </Fragment>
      ))}

      <Button type="submit" errors={Object.keys(errors).length}>
        {formName}
      </Button>
      {(formType === "register" || formType === "login") && (
        <Account>
          {formType === "register" && (
            <>
              Já tem uma conta?
              <strong>
                <Link to="/">Faça seu login aqui</Link>
              </strong>
            </>
          )}
          {formType === "login" && (
            <>
              Ainda não tem uma conta?
              <strong>
                <Link to="/register">Faça seu cadastro aqui</Link>
              </strong>
            </>
          )}
        </Account>
      )}
    </FormContainer>
  );
};

export default Form;
