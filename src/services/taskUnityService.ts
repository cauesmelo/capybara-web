import { ITaskUnity } from "./../interfaces/ITaskList";
import { api } from "./api";

export const updateTaskUnity = async (task: ITaskUnity): Promise<ITaskUnity> => {
  const { data } = await api.patch("taskunity/" + task.id, task);
  return {
    ...data,
    createdAt: new Date(data.createdAt),
    updatedAt: new Date(data.updatedAt),
  };
};
