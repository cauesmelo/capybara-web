import { ReactNode } from "react";
import { ButtonWrapper } from "./style";

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  children: ReactNode;
  onClick?: () => void;
  small?: boolean;
}

export const Button = ({ children, onClick, small }: ButtonProps) => {
  return (
    <ButtonWrapper onClick={onClick} small={small}>
      {children}
    </ButtonWrapper>
  );
};
