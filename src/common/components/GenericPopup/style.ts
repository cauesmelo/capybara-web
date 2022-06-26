import styled, { css } from "styled-components";

interface WrapperProps {
  show: boolean;
}

interface LoadingContainerProps {
  isLoading?: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  z-index: 20;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0 0 0 / 20%);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: 0.2s all;
  will-change: opacity;

  ${(props) =>
    props.show &&
    css`
      opacity: 100%;
      pointer-events: all;
    `}
`;

export const Box = styled.div`
  min-width: 450px;
  max-width: 600px;
  background-color: white;
  border-radius: ${(props) => props.theme.borderRadius};
  overflow: hidden;
  position: relative;
`;

export const Content = styled.div`
  padding: 10px 40px 25px 40px;
`;

export const LoadingContainer = styled.div<LoadingContainerProps>`
  position: absolute;
  inset: 0 0 0 0;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  filter: opacity(0);
  pointer-events: none;
  transition: 0.2s filter;

  ${(props) =>
    props.isLoading &&
    css`
      pointer-events: all;
      filter: opacity(1);
    `}
`;
