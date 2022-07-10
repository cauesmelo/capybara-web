import styled, { css } from "styled-components";

export const TasksContainer = styled.div`
  border-top: 1px solid ${({ theme }) => theme.lightFont};
  border-bottom: 1px solid ${({ theme }) => theme.lightFont};
  padding: 10px 0px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Task = styled.div`
  margin-left: 30px;
  position: relative;
  line-height: 21px;
  display: flex;
  justify-content: space-between;

  &::before {
    content: "";
    display: inline-block;
    position: absolute;
    left: -20px;
    top: 3px;
    width: 15px;
    height: 15px;
    border: 1px solid ${({ theme }) => theme.strongBg};
    border-radius: ${({ theme }) => theme.borderRadius};
  }
`;

export const AddTaskContainer = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.lightFont};
  padding: 0.5rem;
  margin-bottom: 1rem;
`;

export const AddTaskButton = styled.div`
  user-select: none;
  display: flex;
  gap: 5px;
  align-items: center;
  cursor: pointer;
`;

export const AddTaskButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 5px;
`;

export const NoTasks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5ch;
  padding: 1rem 0px;
  align-items: center;
  color: ${({ theme }) => theme.lightFont};

  > * {
    font-size: 2rem;
  }
`;

export const TaskText = styled.p``;

export const DeleteButton = styled.div`
  color: ${({ theme }) => theme.error};
  font-size: 1.1rem;
  cursor: pointer;
`;
