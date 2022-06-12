import { Button } from "../../common/components/Button";
import { TextInput } from "../../common/components/TextInput";
import { Title } from "../../common/components/Title";
import { Box, Wrapper } from "./style";

export const LoginBox = () => {
  return (
    <Wrapper>
      <Box>
        <Title>Capybara</Title>
        <TextInput title="E-mail" />
        <TextInput title="Senha" />
        <Button>Entrar</Button>
      </Box>
    </Wrapper>
  );
};
