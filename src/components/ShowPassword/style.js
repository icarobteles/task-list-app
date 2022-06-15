import styled from "styled-components";

export const Button = styled.button`
  position: absolute;
  top: 1px;
  right: 10px;

  width: 40px;
  height: 38px;

  border: none;
  background: var(--primary-color-900);
  transform: scaleY(-1);

  display: flex;
  justify-content: flex-end;
  align-items: center;

  &:hover {
    cursor: pointer;

    .ico {
      color: ${(props) =>
        props.error ? "var(--error-color-900)" : "var(--terciary-color-900)"};
    }
  }

  .ico {
    color: ${(props) =>
      props.error ? "var(--error-color-900)" : "var(--terciary-color-100)"};
  }

  &:focus {
    outline: none;
  }

  @media (min-width: 1440px) {
    background: var(--terciary-color-100);
    &:hover {
      cursor: pointer;

      .ico {
        color: ${(props) =>
          props.error ? "var(--error-color-900)" : "var(--primary-color-100)"};
      }
    }

    .ico {
      color: ${(props) =>
        props.error ? "var(--error-color-900)" : "var(--primary-color-900)"};
    }

    &:focus {
      outline: none;
    }
  }
`;
