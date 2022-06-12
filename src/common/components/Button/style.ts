import styled from "styled-components";

export const ButtonWrapper = styled.div`
  background: ${(props) => props.theme.strongBg};
  color: ${(props) => props.theme.lightBg};
  border: 1px solid ${(props) => props.theme.mediumBg};
  width: fit-content;
  padding: 10px 30px;
  margin: 20px 0px;
  border-radius: ${(props) => props.theme.borderRadius};
  user-select: none;
  cursor: pointer;
  transition: 0.1s background-color;
  will-change: background-color;

  &:active {
    background-color: ${(props) => props.theme.semiStrongBg};
  }
`;
