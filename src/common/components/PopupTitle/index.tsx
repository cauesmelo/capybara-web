import { ReactNode } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { CloseIcon, TitleContainer, TitleText } from "./style";

interface PopupTitleProps {
  color?: string;
  children: ReactNode;
  onDismiss: () => void;
}

export const PopupTitle = ({ color, onDismiss, children }: PopupTitleProps) => {
  return (
    <TitleContainer>
      <TitleText color={color}>{children}</TitleText>
      <CloseIcon onClick={onDismiss}>
        <IoCloseOutline />
      </CloseIcon>
    </TitleContainer>
  );
};
