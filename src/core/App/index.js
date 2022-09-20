import { ThemeProvider } from "styled-components";
import { themeDark, themeLight } from "./theme";
import { Normalize } from "styled-normalize";
import { GlobalStyle } from "./GlobalStyle";

const App = () => {
  return (
    <ThemeProvider theme={themeLight}>
      <Normalize />
      <GlobalStyle />
      Hello World
    </ThemeProvider>
  );
}

export default App;
