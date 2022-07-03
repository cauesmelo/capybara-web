import { useState, useEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { Transition } from "../common/components/Transition";
import { CreateAccountPage } from "../pages/CreateAccount";
import { HomePage } from "../pages/Login";
import { MainPage } from "../pages/Main";
import { AuthRoute } from "./authRoute";

export const Routes = () => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransistionStage] = useState("fadeIn");

  const handleAnimationEnd = () => {
    if (transitionStage === "fadeOut") {
      setTransistionStage("fadeIn");
      setDisplayLocation(location);
    }
  };

  useEffect(() => {
    if (location !== displayLocation) setTransistionStage("fadeOut");
  }, [location]);

  return (
    <Transition
      transitionStage={transitionStage}
      onAnimationEnd={handleAnimationEnd}
    >
      <Switch location={displayLocation}>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/create-account" exact>
          <CreateAccountPage />
        </Route>

        <AuthRoute path="/notes" exact>
          <MainPage />
        </AuthRoute>
      </Switch>
    </Transition>
  );
};
