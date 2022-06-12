import { Wrapper } from "./style";
import { PortalName } from "./components/PortalName";
import { useHistory } from "react-router-dom";
import { NavigationMenu } from "./components/NavigationMenu";

export const NavigationContainer = () => {
  const history = useHistory();

  return (
    <Wrapper>
      <PortalName onClick={() => history.push("/")} />
      <NavigationMenu />
    </Wrapper>
  );
};
