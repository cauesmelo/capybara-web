import { useHistory } from "react-router-dom";
import { Button } from "../../common/components/Button";
import { Link } from "../../common/components/Link";
import { TextInput } from "../../common/components/TextInput";
import { Title } from "../../common/components/Title";
import { CapybaraIcon } from "../../common/icons/Capybara";
import { Box, IconWrapper, Wrapper } from "./style";

export const LoginBox = () => {
  const history = useHistory();

  const handleLogin = () => {};

  const handleCreate = () => {
    history.push("/create-account");
  };

  return (
    <Wrapper>
      <Box>
        <IconWrapper>
          <CapybaraIcon />
        </IconWrapper>
        <Title>Capybara</Title>
        <TextInput type="email" title="E-mail" />
        <TextInput type="password" title="Senha" />
        <Button>Entrar</Button>
        <Link onClick={handleCreate}>Criar conta</Link>
      </Box>
    </Wrapper>
  );
};
