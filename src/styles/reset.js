import "react-toastify/dist/ReactToastify.css";
import { createGlobalStyle } from "styled-components";

const ResetStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif !important;
    }

    :root{
        --primary-color-900: ${(props) => props.theme.colors.primary[900]};
        --secondary-color-900: ${(props) => props.theme.colors.secondary[900]};
        --terciary-color-900: ${(props) => props.theme.colors.terciary[900]};
        --primary-color-100: ${(props) => props.theme.colors.primary[100]};
        --secondary-color-100: ${(props) => props.theme.colors.secondary[100]};
        --terciary-color-100: ${(props) => props.theme.colors.terciary[100]};

        --positive-color-900: #89f58c;
        --error-color-100: #d35047;
        --alert-color-900: #ebbb49;
        --error-color-900: #d93025;
        --info-color-900: #3498db;

        --toastify-color-light: ${(props) => props.theme.colors.secondary[900]};
        --toastify-color-dark: ${(props) => props.theme.colors.secondary[100]};
        --toastify-color-info: #3498db;
        --toastify-color-success: #89f58c;
        --toastify-color-warning: #ebbb49;
        --toastify-color-error: #d93025;

        --toastify-text-color-light: ${(props) =>
          props.theme.colors.terciary[900]};
        --toastify-text-color-dark: ${(props) =>
          props.theme.colors.terciary[900]};
        --toastify-spinner-color: ${(props) =>
          props.theme.colors.terciary[900]};
    }

    .App {

      width: 100vw;
      min-height: 100vh;
      height: max-content;

      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      background-color: var(--primary-color-900);
      color: var(--terciary-color-100);

    }

`;

export default ResetStyle;
