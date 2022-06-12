import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./common/styles/global";
import { whiteTheme } from "./common/themes/white";
import { Login } from "./components/Login";

export const App = () => {
  return (
    <div>
      <ThemeProvider theme={whiteTheme}>
        <Login />
        <GlobalStyle />
      </ThemeProvider>
    </div>
  );
};
