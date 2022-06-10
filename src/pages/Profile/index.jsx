import { useEffect, useState } from "react";
import Menu from "../../components/Menu";
import { useUser } from "../../providers/user";
import { MainContainer, ProfileContainer } from "./style";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../providers/auth";
import {
  FaUserCircle,
  FaUserAlt,
  FaUserEdit,
  FaExpeditedssl,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {
  BsFillCheckCircleFill,
  BsFillExclamationCircleFill,
  BsFillXCircleFill,
} from "react-icons/bs";
import Form from "../../components/Form";
import Modal from "../../components/Modal";
import {
  changePasswordSchema,
  personalInfosSchema,
} from "../../utils/schemas/user";

const ProfilePage = () => {
  const { userInfos } = useUser();
  const [tasksStats, setTasksStats] = useState({
    total: 0,
    completed: 0,
    incomplete: 0,
    overdue: 0,
  });
  const [inputsPersonalInfos, setInputsPersonalInfos] = useState([
    {
      type: "text",
      name: "name",
      id: "name",
      placeholder: "Nome Completo *",
      defaultValue: userInfos.name,
    },
    {
      type: "email",
      name: "email",
      id: "email",
      placeholder: "Email *",
      defaultValue: userInfos.email,
    },
    {
      type: "password",
      name: "currentPassword",
      id: "currentPassword",
      placeholder: "Sua Senha *",
    },
  ]);
  const [inputsChangePasswords, setInputsChangePasswords] = useState([
    {
      type: "password",
      name: "currentPassword",
      id: "currentPassword",
      placeholder: "Senha Atual *",
    },
    {
      type: "password",
      name: "newPassword",
      id: "newPassword",
      placeholder: "Nova Senha *",
    },
    {
      type: "password",
      name: "passwordConfirmation",
      id: "passwordConfirmation",
      placeholder: "Confirme sua Senha *",
    },
  ]);

  const [openModal, setOpenModal] = useState({
    name: "",
    open: false,
  });

  const { token } = useAuth();
  let navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);

  useEffect(() => {
    setTasksStats(handleTaskStatistics());
    setInputsPersonalInfos((prevState) => {
      return prevState.map((e) => {
        e.defaultValue = userInfos[e.name];
        return e;
      });
    });
  }, [userInfos]);

  const handleTaskStatistics = () => {
    const { tasks } = userInfos;
    console.log(tasks);

    const completedTasks = tasks.filter((task) => task.isCompleted);
    const overdueTasks = tasks.filter((task) => {
      if (task.estimatedCompletedDate && !task.isCompleted) {
        return (
          new Date(task.estimatedCompletedDate).getTime() < new Date().getTime()
        );
      }
      return false;
    });

    const numberTasks = tasks.length;
    const numberCompletedTasks = completedTasks.length;
    const numberIncompleteTasks = numberTasks - numberCompletedTasks;
    const numberOverdueTasks = overdueTasks.length;

    const taskStatistics = {
      total: numberTasks,
      completed: numberCompletedTasks,
      incomplete: numberIncompleteTasks,
      overdue: numberOverdueTasks,
    };

    return taskStatistics;
  };

  return (
    <>
      <Menu />
      <MainContainer>
        <ProfileContainer>
          <section className="logoProfileContainer">
            <FaUserCircle size="5rem" />
          </section>
          <section className="userInfosSection">
            <FaUserAlt />
            <p>{userInfos.name}</p>
          </section>
          <section className="userInfosSection">
            <MdEmail />
            <p>{userInfos.email}</p>
          </section>
          <section className="userInfosSection">
            <BsFillCheckCircleFill color="var(--positive-color-900)" />
            <p>
              {tasksStats.completed}{" "}
              {tasksStats.completed > 1
                ? "tarefas completas"
                : "tarefa completa"}
            </p>
          </section>
          <section className="userInfosSection">
            <BsFillExclamationCircleFill color="var(--alert-color-900)" />
            <p>
              {tasksStats.overdue}{" "}
              {tasksStats.overdue > 1 ? "tarefas atrasadas" : "tarefa atrasada"}
            </p>
          </section>
          <section className="userInfosSection">
            <BsFillXCircleFill color="var(--error-color-900)" />
            <p>
              {tasksStats.incomplete}{" "}
              {tasksStats.incomplete > 1
                ? "tarefas incompletas"
                : "tarefa incompletas"}
            </p>
          </section>
          <section className="actions">
            <button
              type="button"
              onClick={() => {
                setOpenModal({ name: "editUser", open: true });
              }}
            >
              <FaUserEdit size="1.5rem" color="var(--terciary-color-100)" />
            </button>
            <button
              type="button"
              onClick={() => {
                setOpenModal({ name: "changePassword", open: true });
              }}
            >
              <FaExpeditedssl size="1.5rem" color="var(--terciary-color-100)" />
            </button>
          </section>
        </ProfileContainer>
      </MainContainer>
      {openModal.open && (
        <Modal
          setClose={() => {
            setOpenModal({ name: "", open: false });
          }}
        >
          {openModal.name === "editUser" && (
            <Form
              inputsDetails={inputsPersonalInfos}
              setInputDetails={setInputsPersonalInfos}
              schema={personalInfosSchema}
            />
          )}
          {openModal.name === "changePassword" && (
            <Form
              inputsDetails={inputsChangePasswords}
              setInputDetails={setInputsChangePasswords}
              schema={changePasswordSchema}
            />
          )}
        </Modal>
      )}
    </>
  );
};

export default ProfilePage;
