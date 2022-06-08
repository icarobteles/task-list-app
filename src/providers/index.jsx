import { ThemeManagerProvider } from "./theme";

const Providers = ({ children }) => {
  return <ThemeManagerProvider>{children}</ThemeManagerProvider>;
};

export default Providers;
