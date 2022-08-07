import styled, { css } from "styled-components";

interface ReminderMenuButtonProps {
  danger?: boolean;
  onClick?: () => void;
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

export const Reminder = styled.div`
  border: 1px solid ${(props) => props.theme.strongBg};
  border-radius: ${(props) => props.theme.borderRadius};
`;

export const ReminderContent = styled.div`
  padding: 0.1rem 1rem 0.5rem 1rem;
`;

export const ReminderCreation = styled.div`
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

export const ReminderMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 0.5rem;
  gap: 8px;
  margin-top: 5px;
`;

export const ReminderMenuButton = styled.div<ReminderMenuButtonProps>`
  cursor: pointer;
  font-size: 1.2rem;

  ${(props) =>
    props.danger &&
    css`
      color: ${(props) => props.theme.error};
    `}
`;

export const AlertText = styled.div`
  margin-top: 1rem;
  color: ${(props) => props.theme.error};

  span {
    font-weight: bold;
  }
`;

export const ReminderShowCase = styled.div`
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
