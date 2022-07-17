import styled, { css } from "styled-components";

interface MenuButtonProps {
  danger?: boolean;
  onClick?: () => void;
}

export const Wrapper = styled.div`
  border: 1px solid ${(props) => props.theme.strongBg};
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 0.1rem 1rem 0.5rem 1rem;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 0.5rem;
  gap: 8px;
  margin-top: 5px;
`;

export const MenuButton = styled.div<MenuButtonProps>`
  cursor: pointer;
  font-size: 1.2rem;

  ${(props) =>
    props.danger &&
    css`
      color: ${(props) => props.theme.error};
    `}
`;

export const Title = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  border-bottom: 1px solid ${(props) => props.theme.strongBg};
`;

export const Creation = styled.div`
  text-align: right;
  font-style: italic;
  font-size: 0.8rem;
  padding: 0.5rem;
`;
