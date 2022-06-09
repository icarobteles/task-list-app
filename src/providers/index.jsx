import { AuthProvider } from "./auth";
import { ThemeManagerProvider } from "./theme";
import { UserProvider } from "./user";

const Providers = ({ children }) => {
  return (
    <ThemeManagerProvider>
      <AuthProvider>
        <UserProvider>{children}</UserProvider>
      </AuthProvider>
    </ThemeManagerProvider>
  );
};

export default Providers;
