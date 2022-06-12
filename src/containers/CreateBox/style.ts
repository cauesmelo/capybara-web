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
  width: 500px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 100px;
`;

export const IconWrapper = styled.div`
  height: 150px;
`;

export const SubTitle = styled.div`
  font-size: 1.5rem;
  color: ${(props) => props.theme.strongBg};
  margin: 1rem 0rem;
`;
