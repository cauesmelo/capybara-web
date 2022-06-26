import styled, { css } from "styled-components";

interface ButtonWrapperProps {
  small?: boolean;
}

export const ButtonWrapper = styled.button<ButtonWrapperProps>`
  background: ${(props) => props.theme.strongBg};
  color: ${(props) => props.theme.lightBg};
  border: 1px solid ${(props) => props.theme.mediumBg};
  width: fit-content;
  padding: 10px 30px;
  border-radius: ${(props) => props.theme.borderRadius};
  user-select: none;
  cursor: pointer;

  &:active {
    background-color: ${(props) => props.theme.semiStrongBg};
  }

  ${(props) =>
    props.small &&
    css`
      padding: 5px 15px; ;
    `}
`;
