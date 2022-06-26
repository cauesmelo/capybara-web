import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Box } from "../../common/components/Box";
import { Button } from "../../common/components/Button";
import { Link } from "../../common/components/Link";
import { TextInput } from "../../common/components/TextInput";
import { Title } from "../../common/components/Title";
import { CapybaraIcon } from "../../common/icons/Capybara";
import { TextInputInitialState } from "../../interfaces/ITextInputState";
import { IconWrapper, SubTitle, Wrapper } from "./style";

export const CreateBox = () => {
  const handleCreate = {};

  const history = useHistory();
  const [name, setName] = useState(TextInputInitialState);
  const [email, setEmail] = useState(TextInputInitialState);
  const [password, setPassword] = useState(TextInputInitialState);
  const [passwordConfirmation, setPasswordConfirmation] = useState(
    TextInputInitialState
  );

  const goToLogin = () => {
    history.push("/");
  };

  return (
    <Wrapper>
      <Box>
        <IconWrapper>
          <CapybaraIcon />
        </IconWrapper>
        <Title>Capybara</Title>
        <SubTitle>Criação de conta</SubTitle>
        <TextInput type="text" title="Nome" state={[name, setName]} />
        <TextInput type="email" title="E-mail" state={[email, setEmail]} />
        <TextInput
          type="password"
          title="Senha"
          state={[password, setPassword]}
        />
        <TextInput
          type="password"
          title="Confirmação de senha"
          state={[passwordConfirmation, setPasswordConfirmation]}
        />
        <Button>Criar conta</Button>
        <Link onClick={goToLogin}>Voltar para login</Link>
      </Box>
    </Wrapper>
  );
};
