import styled from "styled-components";

export const Wrapper = styled.div`
  display flex;
  align-items: center;
  z-index: 15;
  `;

export const WelcomeText = styled.div`
  color: ${(props) => props.theme.lightBg};
  margin-right: 2rem;
`;
