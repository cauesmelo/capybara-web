import styled, { css } from "styled-components";

interface MenuProps {
  selected?: boolean;
}

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.lightBg};
  border-right: 1px solid ${(props) => props.theme.mediumBg};
  padding-left: 3rem;
  padding-right: 2rem;
`;

export const Container = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Menu = styled.div<MenuProps>`
  padding: 0.8rem 2rem;
  border-radius: ${(props) => props.theme.borderRadius};
  color: ${(props) => props.theme.mediumFont};
  user-select: none;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: background-color 0.2s;
  will-change: background-color;

  ${(props) =>
    props.selected &&
    css`
      background-color: ${(props) => props.theme.mediumBg};
    `}

  &:hover {
    background-color: ${(props) => props.theme.mediumBg};
  }
`;

export const TextWrapper = styled.span``;

export const Icon = styled.span`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
`;
