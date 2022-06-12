import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 10px 50px;
  display: flex;
  justify-content: space-between;
  height: 50px;
  background-color: ${(props) => props.theme.strongBg};
`;
