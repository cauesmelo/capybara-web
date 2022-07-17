import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  margin: 2rem;
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const Line = styled.div`
  border-bottom: 2px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
`;

export const Title = styled.div`
  font-size: 2.5rem;
`;

export const NoteCreation = styled.div`
  text-align: right;
  font-style: italic;
  font-size: 0.8rem;
  padding: 0.5rem;
`;

export const Content = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const AlertText = styled.div`
  margin-top: 1rem;
  color: ${(props) => props.theme.error};

  span {
    font-weight: bold;
  }
`;

export const ShowCase = styled.div`
  padding: 10px;
  margin: 10px;
  border: 1px solid ${(props) => props.theme.strongBg};
  border-radius: ${(props) => props.theme.borderRadius};
`;

export const LineButton = styled.div`
  display: flex;
  margin-top: 1rem;
  gap: 0.5rem;
`;

export const Divisor = styled.div`
  border-top: 1px solid ${(props) => props.theme.strongBg};
`;
