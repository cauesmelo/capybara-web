import { Input, Title, Wrapper } from "./style";

interface TextInputProps extends React.HTMLProps<HTMLInputElement> {
  title: string;
}

export const TextInput = ({ title, type }: TextInputProps) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Input type={type} />
    </Wrapper>
  );
};
