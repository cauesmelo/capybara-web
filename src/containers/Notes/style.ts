import styled, { css } from "styled-components";

interface NoteMenuButtonProps {
  danger?: boolean;
}

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

export const Note = styled.div`
  border: 1px solid ${(props) => props.theme.strongBg};
  border-radius: ${(props) => props.theme.borderRadius};
`;

export const NoteContent = styled.div`
  padding: 0.1rem 1rem 0.5rem 1rem;
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

export const NoteMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 0.5rem;
  gap: 8px;
  margin-top: 5px;
`;

export const NoteMenuButton = styled.div<NoteMenuButtonProps>`
  cursor: pointer;
  font-size: 1.2rem;

  ${(props) =>
    props.danger &&
    css`
      color: ${(props) => props.theme.error};
    `}
`;
