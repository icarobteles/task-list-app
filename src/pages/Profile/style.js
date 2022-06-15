import styled from "styled-components";

export const MainContainer = styled.main`
  width: 100%;
  min-height: calc(100vh - 70px);
  height: max-content;
  margin-top: 70px;
  padding: 15px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProfileContainer = styled.section`
  width: auto;
  max-width: 300px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .logoProfileContainer {
    width: 100%;
    padding: 0px 15px;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 30px;
  }

  .userInfosSection {
    width: 100%;
    padding: 20px 30px;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 30px;

    border-bottom: 1px solid var(--terciary-color-100);
  }

  .actions {
    margin-top: 30px;
    width: 100%;
    padding: 15px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;

    button {
      background: none;
      border: none;

      &:hover {
        cursor: pointer;
      }
    }
  }
`;
