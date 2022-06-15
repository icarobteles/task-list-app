import styled from "styled-components";

export const TaskContainer = styled.li`
  width: 100%;
  max-width: 300px;
  padding: 15px 15px 15px calc(1rem + 15px);

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;

  position: relative;

  border-radius: 5px;
  background-color: var(--terciary-color-100);

  .priorityIndicatorContainer {
    border-radius: 5px 0px 0px 5px;

    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 1rem;
    height: 100%;
    background-color: ${(props) => props.priorityColor};

    small {
      margin-top: 1px;
      font-size: ${(props) => props.theme.fontSizes["xs"]};
      line-height: ${(props) => props.theme.fontSizes["xs"]};
    }
  }

  .taskInfos {
    max-width: 200px;
    color: var(--primary-color-900);
    font-weight: 600;
    font-size: ${(props) => props.theme.fontSizes["lg"]};

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 5px;

    h3 {
      text-align: left;
    }
  }

  .date {
    max-width: 200px;
    padding: 1px 0px;
    color: ${(props) =>
      props.status === "overdue"
        ? "var(--error-color-900)"
        : "var(--primary-color-900)"};
    font-weight: 300;
    font-size: ${(props) => props.theme.fontSizes["xs"]};
    ${(props) => props.status === "overdue" && "text-decoration: line-through"};

    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 5px;
  }

  .completedLate {
    color: var(--error-color-900);
    text-decoration: line-through;
  }

  .completeTaskIcon,
  .editTaskIcon,
  .removeTaskIcon {
    color: var(--primary-color-900);
  }

  .completeTaskButton,
  .editTaskButton,
  .removeTaskButton {
    background: none;
    border: none;

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    right: 15px;

    &:hover {
      .completeTaskIcon,
      .editTaskIcon,
      .removeTaskIcon {
        cursor: pointer;
        color: var(--positive-color-900);
      }

      .editTaskIcon {
        color: var(--info-color-900);
      }

      .removeTaskIcon {
        color: var(--error-color-900);
      }
    }
  }

  .completeTaskButton {
    right: 45px;
  }

  .editTaskButton {
    right: 75px;
  }
`;

export const ConfirmCompletedTaskContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;

  h2 {
    width: 100%;
    text-align: center;
    font-size: ${(props) => props.theme.fontSizes["xl"]};
    font-weight: bold;
    color: var(--terciary-color-100);

    @media (min-width: 1440px) {
      color: var(--primary-color-900);
    }
  }

  .buttonsContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    button {
      background: none;
      border: none;
      color: var(--terciary-color-100);
      text-transform: uppercase;
      font-size: ${(props) => props.theme.fontSizes["sm"]};
      font-weight: 500;

      padding: 5px 10px;

      display: flex;
      justify-content: center;
      align-items: center;

      border: 1px solid var(--terciary-color-100);

      color: var(--terciary-color-100);

      &:hover {
        cursor: pointer;
      }

      &:hover:first-child {
        border-color: var(--positive-color-900);
        color: var(--positive-color-900);
      }

      &:hover:last-child {
        border-color: var(--error-color-900);
        color: var(--error-color-900);
      }

      @media (min-width: 1440px) {
        border: 1px solid var(--primary-color-900);

        color: var(--primary-color-900);
      }
    }
  }
`;
