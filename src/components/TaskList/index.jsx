import { compareDates } from "../../utils/functions";
import TaskItem from "../TaskItem";
import { TaskListContainer, TaskStatusContainer } from "./style";

const TaskList = ({ tasks }) => {
  const completedTasks = tasks
    .filter((task) => task.isCompleted)
    .sort(
      (a, b) =>
        new Date(b.completedDate).getTime() -
        new Date(a.completedDate).getTime()
    );
  const overdueTasks = tasks
    .filter((task) => {
      if (task.estimatedCompletedDate && !task.isCompleted) {
        return compareDates(task.estimatedCompletedDate);
      }
      return false;
    })
    .sort((a, b) => {
      if (a.priority === "Alta") {
        return 1;
      } else if (a.priority === "Média" && b.priority === "Baixa") {
        return 1;
      }
      return -1;
    });
  const processingTasks = tasks
    .filter((task) => {
      if (!task.estimatedCompletedDate && !task.isCompleted) {
        return true;
      }
      if (task.estimatedCompletedDate && !task.isCompleted) {
        return !compareDates(task.estimatedCompletedDate);
      }
      return false;
    })
    .sort((a, b) => {
      if (a.priority === "Alta") {
        return 1;
      } else if (a.priority === "Média" && b.priority === "Baixa") {
        return 1;
      }
      return -1;
    });

  return (
    <TaskListContainer>
      <TaskStatusContainer>
        <h3>Completas</h3>
        <ul>
          {completedTasks.map((task) => (
            <TaskItem
              key={task._id}
              task={task}
              completed={true}
              completedLate={
                task.estimatedCompletedDate &&
                compareDates(task.estimatedCompletedDate)
              }
            />
          ))}
        </ul>
      </TaskStatusContainer>
      <TaskStatusContainer>
        <h3>A fazer, atrasadas</h3>
        <ul>
          {overdueTasks.map((task) => (
            <TaskItem key={task._id} task={task} />
          ))}
        </ul>
      </TaskStatusContainer>
      <TaskStatusContainer>
        <h3>A fazer</h3>
        <ul>
          {processingTasks.map((task) => (
            <TaskItem key={task._id} task={task} />
          ))}
        </ul>
      </TaskStatusContainer>
    </TaskListContainer>
  );
};

export default TaskList;
