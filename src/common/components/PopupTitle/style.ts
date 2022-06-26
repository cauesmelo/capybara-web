import styled, { css } from "styled-components";

interface TextProps {
  color?: string;
}

export const TitleContainer = styled.div`
  height: 70px;
  border-bottom: 1px solid ${(props) => props.theme.mediumBg};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 10px 10px 25px;
`;

export const TitleText = styled.p<TextProps>`
  font-size: 24px;
  color: ${(props) => props.theme.mediumFont};
  flex: 1;

  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `}
`;

export const CloseIcon = styled.div`
  font-size: 1.8rem;
  color: ${(props) => props.theme.mediumFont};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
