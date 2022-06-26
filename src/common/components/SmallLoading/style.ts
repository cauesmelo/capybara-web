import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: var(--green);
  gap: 1rem;
  background-color: ${(props) => props.theme.lightBg};
  border: 1px solid ${(props) => props.theme.mediumBg};
  border-radius: ${(props) => props.theme.borderRadius};
`;

export const Text = styled.p`
  user-select: none;
`;
