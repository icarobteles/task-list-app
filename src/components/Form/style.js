import styled from "styled-components";
import { Move, Show } from "../../styles/animations";

export const FormContainer = styled.form`
  width: 100%;
  max-width: 480px;
  padding: 15px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0px;

  animation: ${Show} 2s 1;

  h2 {
    text-align: center;
    font-size: ${(props) => props.theme.fontSizes["3xl"]};
    text-transform: uppercase;
    margin-bottom: 40px;
  }

  @media (min-width: 1440px) {
    max-width: none;
    padding: 30px;
    width: 25%;
    min-height: 100vh;
    height: 100%;
    background-color: var(--terciary-color-100);
    color: var(--primary-color-900);
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  height: 40px;

  margin-bottom: ${(props) => (props.error ? "10px" : "40px")};

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 10px;

  background-color: transparent;
  border: 1px solid
    ${(props) =>
      props.error ? "var(--error-color-900)" : "var(--terciary-color-900)"};

  font-size: ${(props) => props.theme.fontSizes["md"]};
  font-weight: 400;
  color: ${(props) =>
    props.error ? "var(--error-color-900)" : "var(--terciary-color-100)"};

  &::placeholder {
    color: ${(props) =>
      props.error ? "var(--error-color-900)" : "var(--terciary-color-900)"};
  }

  &::-webkit-calendar-picker-indicator {
    cursor: pointer;
    ${(props) =>
      props.currentTheme === "dark" && "filter: invert(1) brightness(1);"}
    ${(props) => props.currentTheme === "light" && "filter: none;"}
  }

  &:focus {
    outline: none;
    border-color: ${(props) =>
      props.error ? "var(--error-color-900)" : "var(--terciary-color-100)"};
    color: ${(props) =>
      props.error ? "var(--error-color-900)" : "var(--terciary-color-100)"};

    &::placeholder {
      color: ${(props) =>
        props.error ? "var(--error-color-900)" : "var(--terciary-color-100)"};
    }

    ~ button {
      .ico {
        color: ${(props) =>
          props.error ? "var(--error-color-900)" : "var(--terciary-color-900)"};
      }
    }
  }

  @media (min-width: 1440px) {
    border: 1px solid
      ${(props) =>
        props.error ? "var(--error-color-900)" : "var(--primary-color-900)"};
    color: ${(props) =>
      props.error ? "var(--error-color-900)" : "var(--primary-color-900)"};

    &::placeholder {
      color: ${(props) =>
        props.error ? "var(--error-color-900)" : "var(--primary-color-900)"};
    }

    &::-webkit-calendar-picker-indicator {
      ${(props) =>
        props.currentTheme === "light" && "filter: invert(1) brightness(1);"}
      ${(props) => props.currentTheme === "dark" && "filter: none;"}
    }

    &:focus {
      border-color: ${(props) =>
        props.error ? "var(--error-color-900)" : "var(--primary-color-100)"};
      color: ${(props) =>
        props.error ? "var(--error-color-900)" : "var(--primary-color-100)"};

      &::placeholder {
        color: ${(props) =>
          props.error ? "var(--error-color-900)" : "var(--primary-color-100)"};
      }

      ~ button {
        .ico {
          color: ${(props) =>
            props.error
              ? "var(--error-color-900)"
              : "var(--primary-color-100)"};
        }
      }
    }
  }
`;

export const Select = styled.select`
  width: 100%;
  height: 40px;
  padding: 10px;

  background-color: transparent;
  border: 1px solid
    ${(props) =>
      props.error ? "var(--error-color-900)" : "var(--terciary-color-900)"};

  font-size: ${(props) => props.theme.fontSizes["md"]};
  font-weight: 400;
  color: ${(props) =>
    props.error ? "var(--error-color-900)" : "var(--terciary-color-100)"};

  &::placeholder {
    color: ${(props) =>
      props.error ? "var(--error-color-900)" : "var(--terciary-color-900)"};
  }

  &:focus {
    outline: none;
    border-color: ${(props) =>
      props.error ? "var(--error-color-900)" : "var(--terciary-color-100)"};
    color: ${(props) =>
      props.error ? "var(--error-color-900)" : "var(--terciary-color-100)"};

    &::placeholder {
      color: ${(props) =>
        props.error ? "var(--error-color-900)" : "var(--terciary-color-100)"};
    }

    ~ button {
      .ico {
        color: ${(props) =>
          props.error ? "var(--error-color-900)" : "var(--terciary-color-900)"};
      }
    }
  }

  option {
    background-color: var(--primary-color-900);
    color: var(--terciary-color-100);
  }

  @media (min-width: 1440px) {
    option {
      background-color: var(--terciary-color-900);
      color: var(--primary-color-900);
    }

    border: 1px solid
      ${(props) =>
        props.error ? "var(--error-color-900)" : "var(--primary-color-900)"};
    color: ${(props) =>
      props.error ? "var(--error-color-900)" : "var(--primary-color-900)"};

    &::placeholder {
      color: ${(props) =>
        props.error ? "var(--error-color-900)" : "var(--primary-color-900)"};
    }

    &:focus {
      border-color: ${(props) =>
        props.error ? "var(--error-color-900)" : "var(--primary-color-100)"};
      color: ${(props) =>
        props.error ? "var(--error-color-900)" : "var(--primary-color-100)"};

      &::placeholder {
        color: ${(props) =>
          props.error ? "var(--error-color-900)" : "var(--primary-color-100)"};
      }

      ~ button {
        .ico {
          color: ${(props) =>
            props.error
              ? "var(--error-color-900)"
              : "var(--primary-color-100)"};
        }
      }
    }
  }
`;

export const Button = styled.button`
  height: 40px;
  padding: 0px 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: none;
  border: 1px solid var(--terciary-color-900);
  font-size: ${(props) => props.theme.fontSizes["md"]};
  font-weight: 500;
  color: var(--terciary-color-900);

  &:hover {
    cursor: pointer;
    border-color: ${(props) =>
      props.errors > 0
        ? "var(--error-color-900)"
        : "var(--terciary-color-100)"};
    color: ${(props) =>
      props.errors > 0
        ? "var(--error-color-900)"
        : "var(--terciary-color-100)"};
  }

  @media (min-width: 1440px) {
    border: 1px solid var(--primary-color-900);
    color: var(--primary-color-900);

    &:hover {
      border-color: ${(props) =>
        props.errors > 0
          ? "var(--error-color-900)"
          : "var(--primary-color-100)"};
      color: ${(props) =>
        props.errors > 0
          ? "var(--error-color-900)"
          : "var(--primary-color-100)"};
    }
  }
`;

export const Account = styled.p`
  width: 100%;
  text-align: center;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 5px;

  margin-top: 20px;

  font-size: ${(props) => props.theme.fontSizes["sm"]};
  font-weight: 400;
  color: var(--terciary-color-900);

  strong {
    font-weight: 500;

    a,
    button {
      cursor: pointer;
      background: none;
      border: none;
      text-decoration: none;
      color: var(--primary-color-100);

      &:hover {
        text-decoration: underline;
        color: var(--terciary-color-100);
      }
    }
  }

  @media (min-width: 1440px) {
    color: var(--primary-color-900);

    strong {
      a,
      button {
        &:hover {
          color: var(--primary-color-900);
        }
      }
    }
  }
`;

export const ShowError = styled.span`
  width: 100%;
  text-align: left;

  animation: ${Move} 1s 1;

  font-size: ${(props) => props.theme.fontSizes["xs"]};
  font-weight: 300;
  color: var(--error-color-900);

  margin-bottom: 20px;
`;
