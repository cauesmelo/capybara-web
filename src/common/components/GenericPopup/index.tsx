import React from "react";
import { ReactNode, useRef } from "react";
import { Loading } from "../Loading";
import { PopupTitle } from "../PopupTitle";
import { Box, Content, LoadingContainer, Wrapper } from "./style";

export interface IGenericPopupProps {
  show: boolean;
  color?: string;
  title: string;
  children: ReactNode;
  onDismiss: () => void;
  isLoading?: boolean;
}

export const GenericPopup = ({
  show,
  title,
  color,
  onDismiss,
  children,
  isLoading,
}: IGenericPopupProps) => {
  const wrapperRef = useRef(null);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (wrapperRef.current === e.target) {
      onDismiss();
    }
  };

  return (
    <Wrapper show={show} onMouseDown={handleClick} ref={wrapperRef}>
      <Box>
        <PopupTitle color={color} onDismiss={onDismiss}>
          {title}
        </PopupTitle>

        <Content>{children}</Content>
        <LoadingContainer isLoading={isLoading}>
          <Loading />
        </LoadingContainer>
      </Box>
    </Wrapper>
  );
};
