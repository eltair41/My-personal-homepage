import { ThemeProvider } from "styled-components";
import { themeDark, themeLight } from "./theme";
import { Normalize } from "styled-normalize";
import { GlobalStyle } from "./GlobalStyle";
import ThemeSwitch from "../../common/ThemeSwitch";

const App = () => {
  return (
    <ThemeProvider theme={themeLight}>
      <Normalize />
      <GlobalStyle />
      <ThemeSwitch />
    </ThemeProvider>
  );
}

export default App;
