import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  cursor: pointer;
`;

export const PortalTitle = styled.p`
  text-transform: uppercase;
  margin-left: 15px;
  font-size: 1.2rem;
  letter-spacing: 0.1rem;
  font-weight: 300;
  user-select: none;
  color: ${(props) => props.theme.lightBg};
`;
