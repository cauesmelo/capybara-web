import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 50px);
`;

export const Box = styled.div`
  background-color: ${(props) => props.theme.lightBg};
  border: 1px solid ${(props) => props.theme.mediumBg};
  border-radius: ${(props) => props.theme.borderRadius};
  max-width: 100vw;
  max-height: (100vh + 50px);
  height: 500px;
  width: 500px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 100px;
`;
