import styled from "styled-components";

export const Box = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.lightBg};
  border: 1px solid ${(props) => props.theme.mediumBg};
  border-radius: ${(props) => props.theme.borderRadius};
  max-width: 100vw;
  max-height: (100vh + 50px);
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 50px;
`;
