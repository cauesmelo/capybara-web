import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0.5rem 0rem;
`;

export const Title = styled.p`
  margin-bottom: 0.3rem;
`;

export const Input = styled.input`
  line-height: 1.5rem;
  border: 1px solid ${(props) => props.theme.semiStrongBg};
  border-radius: ${(props) => props.theme.borderRadius};
  outline: none;

  &:focus {
    border: 1px solid ${(props) => props.theme.strongBg};
  }
`;
