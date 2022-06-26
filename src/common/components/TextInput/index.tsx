import { IReactState } from "../../../interfaces/IReactState";
import { ITextInputState } from "../../../interfaces/ITextInputState";
import { Input, Title, Wrapper, Error } from "./style";

interface TextInputProps extends React.HTMLProps<HTMLInputElement> {
  title: string;
  state: IReactState<ITextInputState>;
  error?: string;
}

export const TextInput = ({ title, type, state }: TextInputProps) => {
  const [value, setValue] = state;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({
      content: e.target.value,
      error: "",
    });
  };

  return (
    <Wrapper>
      <Title>{title}</Title>
      <Input type={type} value={value.content} onChange={handleChange} />
      {value.error && <Error>{value.error}</Error>}
    </Wrapper>
  );
};
