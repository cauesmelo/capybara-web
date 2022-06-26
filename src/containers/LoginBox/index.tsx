import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";
import { Box } from "../../common/components/Box";
import { Button } from "../../common/components/Button";
import { Link } from "../../common/components/Link";
import { Loading } from "../../common/components/Loading";
import { TextInput } from "../../common/components/TextInput";
import { Title } from "../../common/components/Title";
import { CapybaraIcon } from "../../common/icons/Capybara";
import { IInputState } from "../../interfaces/IInputState";
import { IReactState } from "../../interfaces/IReactState";
import { TextInputInitialState } from "../../interfaces/ITextInputState";
import { authState } from "../../recoil/atoms";
import { authenticateUser } from "../../services/userService";
import { hasEmptyInputs } from "../../utils/hasEmptyInputs";
import { parseError } from "../../utils/parseError";
import { IconWrapper, Wrapper } from "./style";

export const LoginBox = () => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState(TextInputInitialState);
  const [password, setPassword] = useState(TextInputInitialState);
  const [auth, setAuth] = useRecoilState(authState);

  const form: IReactState<IInputState>[] = [
    [email, setEmail],
    [password, setPassword],
  ];

  const handleLogin = async () => {
    if (!hasEmptyInputs(form)) {
      setIsLoading(true);
      try {
        const credentials = await authenticateUser({
          email: email.content,
          password: password.content,
        });
        toast.success("Login realizado com sucesso");
        setAuth(credentials);
        localStorage.setItem("@capybaraData", JSON.stringify(credentials));
        history.push("/notes");
      } catch (err: any) {
        console.error(err);
        toast.error(parseError(err));
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleCreate = () => {
    history.push("/create-account");
  };

  useEffect(() => {
    if (auth) history.push("/notes");
  }, []);

  return (
    <Wrapper>
      <Box>
        <IconWrapper>
          <CapybaraIcon />
        </IconWrapper>
        <Title>Capybara</Title>
        <TextInput type="email" title="E-mail" state={[email, setEmail]} />
        <TextInput
          type="password"
          title="Senha"
          state={[password, setPassword]}
        />
        <Button onClick={handleLogin}>Entrar</Button>
        <Link onClick={handleCreate}>Criar conta</Link>

        {isLoading && <Loading />}
      </Box>
    </Wrapper>
  );
};
