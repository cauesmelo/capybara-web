import { ReactNode } from "react";
import { ButtonWrapper } from "./style";

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  children: ReactNode;
  onClick?: () => void;
  small?: boolean;
  danger?: boolean;
}

export const Button = ({ children, onClick, small, danger }: ButtonProps) => {
  return (
    <ButtonWrapper onClick={onClick} small={small} danger={danger}>
      {children}
    </ButtonWrapper>
  );
};
