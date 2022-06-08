import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";
import { useThemeManager } from "./providers/theme";
import Routes from "./routes";
import ResetStyle from "./styles/reset";
import { themes } from "./styles/themes";

const App = () => {
  const { currentTheme } = useThemeManager();
  return (
    <>
      <ThemeProvider theme={themes[currentTheme]}>
        <div className="App">
          <Routes />
          <ToastContainer
            position="top-right"
            autoClose={1500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            theme="dark"
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover={false}
          />
        </div>
        <ResetStyle />
      </ThemeProvider>
    </>
  );
};

export default App;
