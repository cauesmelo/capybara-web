import { BrowserRouter } from "react-router-dom";
import { NavigationContainer } from "../containers/Navigation";
import { Routes } from "./routes";

export const RoutesRoot = () => {
  return (
    <BrowserRouter>
      <NavigationContainer />
      <Routes />
    </BrowserRouter>
  );
};
