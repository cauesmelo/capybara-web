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

export const Input = styled.input<React.HTMLProps<HTMLInputElement>>`
  line-height: 1.5rem;
  border: 1px solid ${(props) => props.theme.semiStrongBg};
  border-radius: ${(props) => props.theme.borderRadius};
  outline: none;
  padding: 2px 10px;

  &:focus {
    border: 1px solid ${(props) => props.theme.strongBg};
  }
`;

export const Error = styled.p`
  color: ${(props) => props.theme.error};
  margin-top: 2px;
  margin-left: 5px;
  font-size: 0.8rem;
`;

export const InputArea = styled.textarea<React.HTMLProps<HTMLInputElement>>`
  line-height: 1.5rem;
  border: 1px solid ${(props) => props.theme.semiStrongBg};
  border-radius: ${(props) => props.theme.borderRadius};
  outline: none;
  padding: 2px 10px;
  resize: vertical;

  &:focus {
    border: 1px solid ${(props) => props.theme.strongBg};
  }
`;
