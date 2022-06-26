import { IReactState } from "../../../interfaces/IReactState";
import { ITextInputState } from "../../../interfaces/ITextInputState";
import { Input, Title, Wrapper, Error, InputArea } from "./style";

interface TextInputProps extends React.HTMLProps<HTMLInputElement> {
  title?: string;
  state: IReactState<ITextInputState>;
  error?: string;
  textarea?: boolean;
}

export const TextInput = ({ title, type, state, textarea }: TextInputProps) => {
  const [value, setValue] = state;

  const handleChange = (e: any) => {
    setValue({
      content: e.target.value,
      error: "",
    });
  };

  return (
    <Wrapper>
      {title && <Title>{title}</Title>}
      {textarea ? (
        <InputArea value={value.content} onChange={handleChange} />
      ) : (
        <Input type={type} value={value.content} onChange={handleChange} />
      )}
      {value.error && <Error>{value.error}</Error>}
    </Wrapper>
  );
};
