import { HashRouter } from "react-router-dom";
import { NavigationContainer } from "../containers/Navigation";
import { Routes } from "./routes";

export const RoutesRoot = () => {
  return (
    <HashRouter>
      <NavigationContainer />
      <Routes />
    </HashRouter>
  );
};
