import { CircleLoader } from "react-spinners";
import { Wrapper, Text } from "./style";

interface LoadingProps {
  customText?: string;
}

export const Loading = ({ customText }: LoadingProps) => {
  return (
    <Wrapper>
      <CircleLoader />
      <Text>{customText ?? "Carregando..."}</Text>
    </Wrapper>
  );
};
