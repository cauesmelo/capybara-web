import { ReactNode } from "react";
import { ButtonWrapper } from "./style";

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  children: ReactNode;
  onClick?: () => void;
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return <ButtonWrapper onClick={onClick}>{children}</ButtonWrapper>;
};
