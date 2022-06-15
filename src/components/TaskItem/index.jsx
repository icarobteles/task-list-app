import { ConfirmCompletedTaskContainer, TaskContainer } from "./style";

import { AiFillClockCircle } from "react-icons/ai";
import { FaCheck, FaEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";

import { useState } from "react";
import Modal from "../Modal";
import Form from "../Form";
import { completeTask, removeTask } from "../../services/task/task";
import { useAuth } from "../../providers/auth";
import { useUser } from "../../providers/user";
import { editTaskSchema } from "../../utils/schemas/task";
import { compareDates } from "../../utils/functions";

import { format } from "date-fns-tz";
import { parseISO } from "date-fns";

const Task = ({ task, completed, completedLate }) => {
  const { token } = useAuth();
  const { getUserInfos } = useUser();
  const [openModal, setOpenModal] = useState({ name: "", open: false });
  const [inputsEditTask, setInputsEditTask] = useState([
    {
      type: "text",
      name: "name",
      id: "name",
      placeholder: "Nome da Tarefa",
      defaultValue: task.name,
    },
    {
      type: "datetime-local",
      name: "estimatedCompletedDate",
      id: "estimatedCompletedDate",
      placeholder: "Data de Conclusão",
      defaultValue: task.estimatedCompletedDate?.slice(0, 16),
    },
    {
      type: "select",
      placeholder: "Selecione a prioridade",
      select: {
        name: "priority",
        id: "priority",
        defaultValue: task.priority,
      },
      options: ["Alta", "Média", "Baixa"],
    },
  ]);

  const checkTaskStatus = () => {
    if (task.isCompleted) {
      return "completed";
    } else if (!task.estimatedCompletedDate) {
      return "processing";
    } else {
      const isOverdue = compareDates(task.estimatedCompletedDate);
      if (isOverdue) {
        return "overdue";
      } else {
        return "processing";
      }
    }
  };

  const getColorByTaskPriority = () => {
    const { priority } = task;

    if (priority === "Alta") {
      return "var(--error-color-900)";
    } else if (priority === "Média") {
      return "var(--alert-color-900)";
    } else if (priority === "Baixa") {
      return "var(--info-color-900)";
    }
  };

  let taskStatus = checkTaskStatus();

  return (
    <TaskContainer status={taskStatus} priorityColor={getColorByTaskPriority}>
      <div className="priorityIndicatorContainer"></div>
      <section className="taskInfos">
        <h3>{task.name}</h3>
        {completed ? (
          <>
            <span className={"date"}>
              <FaCheck />
              {format(parseISO(task.completedDate), "dd/MM/yyyy HH:mm")}
            </span>
            {completedLate && (
              <span className={"date completedLate"}>
                <AiFillClockCircle />
                {task.estimatedCompletedDate.slice(8, 10) +
                  "/" +
                  task.estimatedCompletedDate.slice(5, 7) +
                  "/" +
                  task.estimatedCompletedDate.slice(0, 4) +
                  " " +
                  task.estimatedCompletedDate.slice(11, 16)}
              </span>
            )}
          </>
        ) : (
          task.estimatedCompletedDate && (
            <span className="date">
              <AiFillClockCircle />
              {task.estimatedCompletedDate.slice(8, 10) +
                "/" +
                task.estimatedCompletedDate.slice(5, 7) +
                "/" +
                task.estimatedCompletedDate.slice(0, 4) +
                " " +
                task.estimatedCompletedDate.slice(11, 16)}
            </span>
          )
        )}
      </section>

      <button
        className="removeTaskButton"
        onClick={() => setOpenModal({ name: "removeTask", open: true })}
      >
        <RiDeleteBin5Fill size="1.2rem" className="removeTaskIcon" />
      </button>
      <button
        className="editTaskButton"
        onClick={() => setOpenModal({ name: "editTask", open: true })}
      >
        {taskStatus === "processing" && (
          <>
            <FaEdit size="1rem" className="editTaskIcon" />
          </>
        )}
        {taskStatus === "overdue" && (
          <>
            <FaEdit size="1rem" className="editTaskIcon" />
          </>
        )}
      </button>
      <button
        className="completeTaskButton"
        onClick={() => setOpenModal({ name: "completeTask", open: true })}
      >
        {taskStatus === "processing" && (
          <>
            <FaCheck size="1rem" className="completeTaskIcon" />
          </>
        )}
        {taskStatus === "overdue" && (
          <>
            <FaCheck size="1rem" className="completeTaskIcon" />
          </>
        )}
      </button>

      {openModal.open && (
        <Modal setClose={() => setOpenModal({ name: "", open: false })}>
          {openModal.name === "completeTask" && (
            <ConfirmCompletedTaskContainer>
              <h2>Deseja completar esta tarefa?</h2>
              <div className="buttonsContainer">
                <button
                  onClick={async () => {
                    await completeTask(task._id, token);
                    await getUserInfos();
                    setOpenModal({ name: "", open: false });
                  }}
                >
                  Sim
                </button>
                <button onClick={() => setOpenModal({ name: "", open: false })}>
                  Não
                </button>
              </div>
            </ConfirmCompletedTaskContainer>
          )}
          {openModal.name === "removeTask" && (
            <ConfirmCompletedTaskContainer>
              <h2>Deseja remover esta tarefa?</h2>
              <div className="buttonsContainer">
                <button
                  onClick={async () => {
                    await removeTask(task._id, token);
                    await getUserInfos();
                    setOpenModal({ name: "", open: false });
                  }}
                >
                  Sim
                </button>
                <button onClick={() => setOpenModal({ name: "", open: false })}>
                  Não
                </button>
              </div>
            </ConfirmCompletedTaskContainer>
          )}
          {openModal.name === "editTask" && (
            <Form
              setClose={() => setOpenModal({ name: "", open: false })}
              task={task}
              inputsDetails={inputsEditTask}
              setInputDetails={setInputsEditTask}
              schema={editTaskSchema}
              formConfig={{ formType: "editTask", formName: "Editar Tarefa" }}
            />
          )}
        </Modal>
      )}
    </TaskContainer>
  );
};

export default Task;
