import { useThemeManager } from "../../providers/theme";
import { LogoContainer } from "./style";

const Logo = ({ flexReverse = false }) => {
  const { currentLogo } = useThemeManager();

  return (
    <LogoContainer flexReverse={flexReverse}>
      <h1>
        Lista de Tarefas
        <span>Organize sua rotina de forma ágil e prática</span>
      </h1>
      <img src={currentLogo} alt="Logo da Aplicação" />
    </LogoContainer>
  );
};

export default Logo;
