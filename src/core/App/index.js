import { ThemeProvider } from "styled-components";
import { themeDark, themeLight } from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={themeLight}>
      Hello World
    </ThemeProvider>
  );
}

export default App;
