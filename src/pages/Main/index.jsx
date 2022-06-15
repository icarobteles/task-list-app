import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../providers/auth";
import { useUser } from "../../providers/user";

//COMPONENTS
import Menu from "../../components/Menu";
import TaskList from "../../components/TaskList";
import Modal from "../../components/Modal";
import Form from "../../components/Form";

//STYLED COMPONENTS
import { EmptyContainer, MainContainer } from "./style";

//REACT-ICONS
import { MdAddTask } from "react-icons/md";
import { editTaskSchema } from "../../utils/schemas/task";

const MainPage = () => {
  const { token } = useAuth();
  const { userInfos } = useUser();

  const [openModal, setOpenModal] = useState(false);
  const [inputsAddTask, setInputsAddTask] = useState([
    {
      type: "text",
      name: "name",
      id: "name",
      placeholder: "Nome da Tarefa",
    },
    {
      type: "text",
      name: "estimatedCompletedDate",
      id: "estimatedCompletedDate",
      placeholder: "Data de Conclusão",
      onClick: (event) => (event.target.type = "datetime-local"),
      onMouseOut: (event) => (event.target.type = "text"),
    },
    {
      type: "select",
      placeholder: "Selecione a Prioridade",
      select: {
        name: "priority",
        id: "priority",
        defaultValue: "",
      },
      options: ["Alta", "Média", "Baixa"],
    },
  ]);

  let navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <>
      <Menu />
      <MainContainer>
        <h1>Suas Tarefas</h1>
        <div className="addTaskContainer">
          <h2>Adicionar Tarefa</h2>
          <button className="addTaskButton" onClick={() => setOpenModal(true)}>
            <MdAddTask size="1.5rem" className="addTaskIcon" />
          </button>
        </div>
        {userInfos.tasks.length > 0 ? (
          <TaskList tasks={userInfos.tasks} />
        ) : (
          <EmptyContainer></EmptyContainer>
        )}
        {openModal && (
          <Modal setClose={() => setOpenModal(false)}>
            <Form
              inputsDetails={inputsAddTask}
              setInputDetails={setInputsAddTask}
              schema={editTaskSchema}
              formConfig={{ formType: "addTask", formName: "Adicionar Tarefa" }}
              setClose={() => setOpenModal(false)}
            />
          </Modal>
        )}
      </MainContainer>
    </>
  );
};

export default MainPage;
