import { IoPencilOutline, IoTrashOutline } from "react-icons/io5";
import { ITaskList } from "../../../../interfaces/ITaskList";
import { TaskItem } from "../TaskItem";
import { Creation, Menu, MenuButton, Title, Wrapper } from "./style";

interface TasklistCardProps {
  tasklist: ITaskList;
  onDelete: () => void;
}

export const TasklistCard = ({ tasklist, onDelete }: TasklistCardProps) => {
  return (
    <Wrapper>
      <Menu>
        {/* <MenuButton onClick={undefined}>
          <IoPencilOutline />
        </MenuButton> */}

        <MenuButton danger onClick={onDelete}>
          <IoTrashOutline />
        </MenuButton>
      </Menu>
      <Title>{tasklist.title}</Title>
      {tasklist.tasks.map((task) => (
        <TaskItem task={task} key={task.id} />
      ))}

      <Creation>{tasklist.createdAt.toLocaleDateString("pt-BR")}</Creation>
    </Wrapper>
  );
};
