import { useState, useEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { Transition } from "../common/components/Transition";
import { ForbiddenPage } from "../pages/Forbidden";
import { HomePage } from "../pages/Home";
import { NotesPage } from "../pages/Notes";
import { PreferencesPage } from "../pages/Preferences";
import { RemindersPage } from "../pages/Reminders";
import { TasklistsPage } from "../pages/Tasklists";
import { AuthRoute } from "./adminRoute";

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

        <AuthRoute path="/notes" exact>
          <NotesPage />
        </AuthRoute>

        <AuthRoute path="/reminders" exact>
          <RemindersPage />
        </AuthRoute>

        <AuthRoute path="/tasklists" exact>
          <TasklistsPage />
        </AuthRoute>

        <AuthRoute path="/preferences" exact>
          <PreferencesPage />
        </AuthRoute>

        <Route path="/acesso-negado">
          <ForbiddenPage />
        </Route>
      </Switch>
    </Transition>
  );
};
