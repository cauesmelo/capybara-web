import styled, { css } from "styled-components";

export interface TransitionProps extends React.HTMLAttributes<HTMLDivElement> {
  transitionStage?: string;
}

export const Transition = styled.div<TransitionProps>`
  position: relative;
  flex: 1;
  ${(props) =>
    props.transitionStage === "fadeIn"
      ? css`
          animation: 0.2s fadeIn;
        `
      : css`
          animation: 0.2s fadeOut;
        `}
`;
