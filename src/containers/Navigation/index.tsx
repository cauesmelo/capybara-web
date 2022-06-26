import { Wrapper } from "./style";
import { PortalName } from "./components/PortalName";
import { useHistory } from "react-router-dom";
import { NavigationMenu } from "./components/NavigationMenu";
import { useRecoilValue } from "recoil";
import { authState } from "../../recoil/atoms";

export const NavigationContainer = () => {
  const history = useHistory();

  const auth = useRecoilValue(authState);

  const handleLogoClick = () => {
    if (auth) history.push("/notes");
    else history.push("/");
  };

  return (
    <Wrapper>
      <PortalName onClick={handleLogoClick} />
      <NavigationMenu />
    </Wrapper>
  );
};
