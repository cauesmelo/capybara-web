import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer } from "react-toastify";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./common/styles/global";
import { whiteTheme } from "./common/themes/white";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./services/queryClient";
import { RoutesRoot } from "./routes";

export const App = () => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={whiteTheme}>
          <RoutesRoot />
          <GlobalStyle />
        </ThemeProvider>
        <ToastContainer />
      </QueryClientProvider>
    </RecoilRoot>
  );
};
