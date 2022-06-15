import styled from "styled-components";

export const MainContainer = styled.main`
  width: 100%;
  min-height: calc(100vh - 70px);
  height: max-content;
  margin-top: 70px;

  padding: 15px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;

  overflow: auto;

  h1 {
    text-transform: uppercase;
    text-align: center;
    font-size: ${(props) => props.theme.fontSizes["5xl"]};
    font-weight: black;
    text-shadow: 2px 1px 1px var(--secondary-color-900);
  }

  .addTaskContainer {
    width: 100%;
    max-width: 360px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-bottom: 10px;
    border-bottom: 1px solid var(--terciary-color-100);

    h2 {
      text-transform: uppercase;
      text-align: center;
      font-size: ${(props) => props.theme.fontSizes["md"]};
      font-weight: 600;
    }

    .addTaskIcon {
      color: var(--terciary-color-100);
    }

    .addTaskButton {
      background: none;
      border: none;

      &:hover {
        cursor: pointer;
        .addTaskIcon {
          color: var(--terciary-color-900);
        }
      }
    }

    @media (min-width: 770px) {
      max-width: 740px;
    }

    @media (min-width: 1150px) {
      max-width: 1120px;
    }
  }
`;

export const EmptyContainer = styled.div`
  width: 100%;
  height: 480px;
`;
