import { IReactState } from "../../../interfaces/IReactState";
import { ITextInputState } from "../../../interfaces/ITextInputState";
import { Input, Title, Wrapper, Error, InputArea } from "./style";

interface TextInputProps extends React.HTMLProps<HTMLInputElement> {
  title?: string;
  state: IReactState<ITextInputState>;
  error?: string;
  textarea?: boolean;
  placeholder?: string;
}

export const TextInput = ({ title, type, state, textarea, placeholder }: TextInputProps) => {
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
        <Input type={type} value={value.content} onChange={handleChange} placeholder={placeholder} />
      )}
      {value.error && <Error>{value.error}</Error>}
    </Wrapper>
  );
};
