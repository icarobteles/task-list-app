import styled from "styled-components";

export const Button = styled.button`
  width: 40px;
  height: 40px;
  padding: 5px;

  border: none;
  border-radius: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  position: ${(props) => props.position || "absolute"};
  bottom: 15px;
  right: ${(props) => props.right || "none"};
  left: ${(props) => props.left || "none"};

  background: ${(props) =>
    props.backgroundColor || "var(--terciary-color-100)"};

  &:hover {
    cursor: pointer;
    background: ${(props) =>
      props.backgroundColor || "var(--terciary-color-900)"};

    .themeModeIco {
      color: var(--primary-color-100);
    }
  }

  .themeModeIco {
    color: var(--primary-color-900);
  }
`;
