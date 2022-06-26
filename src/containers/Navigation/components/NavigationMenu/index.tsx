import { useHistory } from "react-router-dom";
import { authState } from "../../../../recoil/atoms";
import { useRecoilState } from "recoil";
import { Wrapper } from "./style";
import { Button } from "../../../../common/components/Button";
import { toast } from "react-toastify";

export const NavigationMenu = () => {
  const [auth, setAuth] = useRecoilState(authState);
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem("@capybaraData");
    setAuth(undefined);
    history.push("/");
    toast.success("Deslogado com sucesso");
  };

  return (
    <Wrapper>{auth && <Button onClick={handleLogout}>Sair</Button>}</Wrapper>
  );
};
