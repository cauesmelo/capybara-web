import { ReactNode } from "react";
import { ButtonWrapper } from "./style";

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  children: ReactNode;
}

export const Button = ({ children }: ButtonProps) => {
  return <ButtonWrapper>{children}</ButtonWrapper>;
};
