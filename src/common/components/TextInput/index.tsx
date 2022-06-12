import { Input, Title, Wrapper } from "./style";

interface TextInputProps {
  title: string;
}

export const TextInput = ({ title }: TextInputProps) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Input />
    </Wrapper>
  );
};
