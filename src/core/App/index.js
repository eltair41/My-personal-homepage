import { ThemeProvider } from "styled-components";
import { themeDark, themeLight } from "./theme";
import { Normalize } from "styled-normalize";

const App = () => {
  return (
    <ThemeProvider theme={themeLight}>
      <Normalize />
      Hello World
    </ThemeProvider>
  );
}

export default App;
