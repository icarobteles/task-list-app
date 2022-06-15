import styled from "styled-components";
import { Move } from "../../styles/animations";

export const ModalContainer = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  padding: 15px;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-height: 436px) {
    align-items: flex-start;
  }
`;

export const ModalContent = styled.div`
  background-color: var(--primary-color-900);
  padding: 15px;
  border: 1px solid var(--terciary-color-100);
  width: 360px;
  animation: ${Move} 1s 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .close {
    margin-left: calc(100% - 16px);
    text-align: right;
    font-size: ${(props) => props.theme.fontSizes["md"]};

    &:hover {
      cursor: pointer;
      color: var(--error-color-900);
    }
  }

  form {
    width: 100% !important;
    min-height: inherit !important;
  }

  @media (min-width: 1440px) {
    background-color: var(--terciary-color-100);
    border: 1px solid var(--primary-color-900);

    .close {
      color: var(--primary-color-900);
    }
  }
`;
