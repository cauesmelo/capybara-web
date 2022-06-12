import { Button } from "../../common/components/Button";
import { TextInput } from "../../common/components/TextInput";
import { Title } from "../../common/components/Title";
import { CapybaraIcon } from "../../common/icons/Capybara";
import { Box, IconWrapper, SubTitle, Wrapper } from "./style";

export const CreateBox = () => {
  const handleCreate = {};

  return (
    <Wrapper>
      <Box>
        <IconWrapper>
          <CapybaraIcon />
        </IconWrapper>
        <Title>Capybara</Title>
        <SubTitle>Criação de conta</SubTitle>
        <TextInput type="text" title="Nome" />
        <TextInput type="email" title="E-mail" />
        <TextInput type="password" title="Senha" />
        <TextInput type="password" title="Confirmação de senha" />
        <Button>Criar conta</Button>
      </Box>
    </Wrapper>
  );
};
