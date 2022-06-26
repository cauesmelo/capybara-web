import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 50px);
  padding: 1rem;
`;

export const IconWrapper = styled.div`
  height: 80px;
`;

export const SubTitle = styled.div`
  font-size: 1.5rem;
  color: ${(props) => props.theme.strongBg};
`;
