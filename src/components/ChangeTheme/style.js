import styled from "styled-components";

export const Button = styled.button`
  width: 40px;
  height: 40px;
  padding: 5px;

  border: none;
  border-radius: 100%;
  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.3);

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  bottom: 15px;
  right: ${(props) => props.right || "none"};
  left: ${(props) => props.left || "none"};

  background-color: var(--terciary-color-100);

  &:hover {
    cursor: pointer;
    background-color: var(--terciary-color-900);
  }
`;
