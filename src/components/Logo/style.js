import styled from "styled-components";
import { Show } from "../../styles/animations";

export const LogoContainer = styled.div`
  display: none;

  animation: ${Show} 2s 1;

  h1 {
    text-align: ${(props) => (props.flexReverse ? "left" : "right")};
    font-weight: 900;
    font-size: ${(props) => props.theme.fontSizes["4xl"]};

    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  span {
    font-weight: 400;
    font-size: ${(props) => props.theme.fontSizes["xl"]};
    font-style: italic;
  }

  @media (min-width: 1440px) {
    display: flex;
    flex-direction: ${(props) => (props.flexReverse ? "row-reverse" : "row")};
    justify-content: center;
    align-items: center;
    gap: 100px;
    width: 75%;
  }
`;
