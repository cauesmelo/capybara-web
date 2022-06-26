import { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
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
import { createAccount } from "../../services/userService";
import { hasEmptyInputs } from "../../utils/hasEmptyInputs";
import { parseError } from "../../utils/parseError";
import { IconWrapper, SubTitle, Wrapper } from "./style";

export const CreateAccountContainer = () => {
  const history = useHistory();
  const [name, setName] = useState(TextInputInitialState);
  const [email, setEmail] = useState(TextInputInitialState);
  const [password, setPassword] = useState(TextInputInitialState);
  const [isLoading, setIsLoading] = useState(false);
  const [passwordConfirmation, setPasswordConfirmation] = useState(
    TextInputInitialState
  );

  const form: IReactState<IInputState>[] = [
    [name, setName],
    [email, setEmail],
    [password, setPassword],
    [passwordConfirmation, setPasswordConfirmation],
  ];

  const goToLogin = () => {
    history.push("/");
  };

  const isEqualPassword = (): boolean => {
    if (password.content === passwordConfirmation.content) {
      return true;
    } else {
      setPasswordConfirmation({
        ...passwordConfirmation,
        error: "Confirmação de senha incorreta",
      });
      return false;
    }
  };

  const isValidPassword = (): boolean => {
    if (password.content.length > 5) {
      return true;
    } else {
      setPassword({
        ...passwordConfirmation,
        error: "Senha precisa ter no mínimo 6 caracteres",
      });
      return false;
    }
  };

  const handleCreate = async () => {
    if (!hasEmptyInputs(form) && isEqualPassword() && isValidPassword()) {
      setIsLoading(true);
      try {
        await createAccount({
          name: name.content,
          email: email.content,
          password: password.content,
        });
        toast.success("Conta criada com sucesso");
        history.push("/");
      } catch (err: any) {
        console.error(err);
        toast.error(parseError(err));
      } finally {
        setIsLoading(false);
      }
    }
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
        <Button onClick={handleCreate}>Criar conta</Button>
        <Link onClick={goToLogin}>Voltar para login</Link>

        {isLoading && <Loading />}
      </Box>
    </Wrapper>
  );
};
