import { ITaskList, ITaskUnity } from "../../../../interfaces/ITaskList";
import { Wrapper } from "./style";
import { Checkbox } from "rsuite";
import { updateTaskUnity } from "../../../../services/taskUnityService";
import { queryClient } from "../../../../services/queryClient";

interface TaskItemProps {
  task: ITaskUnity;
}

export const TaskItem = ({ task }: TaskItemProps) => {
  const handleChange = async (_: any, checked: boolean) => {
    const updatedTask = await updateTaskUnity({
      ...task,
      isComplete: checked,
    });

    const currentState = queryClient.getQueryState<ITaskList[]>("tasklists")!;

    const newState = currentState.data?.map((tasklist) => ({
      ...tasklist,
      tasks: tasklist.tasks.map((t) => {
        if (t.id === task.id) return updatedTask;
        else return t;
      }),
    }));

    if (newState) queryClient.setQueryData("tasklists", newState);
  };

  return (
    <Wrapper>
      <Checkbox defaultChecked={task.isComplete} onChange={handleChange} />
      {task.title}
    </Wrapper>
  );
};
