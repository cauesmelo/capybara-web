import { useHistory } from "react-router-dom";
import { authState } from "../../../../recoil/atoms";
import { useRecoilValue } from "recoil";
import { Wrapper } from "./style";
import { Button } from "../../../../common/components/Button";

export const NavigationMenu = () => {
  const auth = useRecoilValue(authState);
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem("@capybara:token");
    history.push("/");
  };

  return (
    <Wrapper>{auth && <Button onClick={handleLogout}>Sair</Button>}</Wrapper>
  );
};
