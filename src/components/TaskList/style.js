import styled from "styled-components";

export const TaskListContainer = styled.ol`
  width: 100%;
  height: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;

  list-style: none;
`;

export const TaskStatusContainer = styled.li`
  width: 100%;
  height: 480px;
  padding: 15px 10px;

  max-width: 360px;

  border: 1px solid var(--terciary-color-100);

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;

  h3 {
    width: 100%;
    text-align: center;
    font-size: ${(props) => props.theme.fontSizes["lg"]};
    font-weight: 500;

    padding-bottom: 5px;
    border-bottom: 1px solid var(--terciary-color-100);
  }

  ul {
    width: 100%;
    height: 100%;
    padding: 10px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 30px;

    overflow-y: auto;

    &::-webkit-scrollbar-track {
      background-color: var(--terciary-color-100);
    }
    &::-webkit-scrollbar {
      width: 7px;
      background: var(--terciary-color-100);
    }
    &::-webkit-scrollbar-thumb {
      border: 1px solid var(--terciary-color-100);
      background: var(--primary-color-100);
    }
  }
`;
