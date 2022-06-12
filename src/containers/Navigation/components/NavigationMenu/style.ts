import styled, { css } from "styled-components";

interface ArrowIconWrapperProps {
  flip?: boolean;
}

interface MenuItemWrapperProps {
  expand?: boolean;
}

export const Wrapper = styled.div`
  flex: 1;
  margin: 0 2rem;
  display flex;
  align-items: center;
  z-index: 15;
  `;

export const MenuItemChildless = styled.p`
  font-weight: 600;
  margin-left: 50px;
  cursor: pointer;
  user-select: none;
  padding: 0px 10px;
`;

export const MenuItemWrapper = styled.div<MenuItemWrapperProps>`
  height: 40px;
  overflow: hidden;
  transition: none;

  ${(props) =>
    props.expand &&
    css`
      transition: 0.2s all;
      height: 410px;
    `}
`;

export const MenuItemHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  cursor: default;
  margin-left: 25px;
`;

export const MenuItemChildsContainer = styled.div`
  left: 0px;
  width: 300px;
  top: 39px;
  height: fit-content;
  box-shadow: var(--box-shadow);
  display: flex;
  flex-direction: column;
  margin: 5px;
  background-color: white;
`;

export const MenuItemChild = styled.div`
  font-weight: 600;
  padding: 16px;

  &:hover {
    background-color: var(--grey-40);
    cursor: pointer;
    user-select: none;
  }

  &:active {
    background-color: var(--bg-green);
  }
`;

export const MenuItemContainer = styled.div`
  margin-left: 25px;
  height: 40px;
`;

export const ArrowIconWrapper = styled.div<ArrowIconWrapperProps>`
  transition: 0.2s transform;
  will-change: transform;

  ${(props) =>
    props.flip &&
    css`
      transform: rotate(180deg);
    `}
`;
