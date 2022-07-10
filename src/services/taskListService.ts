import { ITaskList, ITaskListRaw } from "../interfaces/ITaskList";
import { api } from "./api";

export const getAllTaskLists = async (): Promise<ITaskList[]> => {
  const { data } = await api.get("tasklist");

  return data.map((tasklist: ITaskListRaw) => ({
    ...tasklist,
    createdAt: new Date(tasklist.createdAt),
    updatedAt: new Date(tasklist.updatedAt),
  }));
};

export const createTaskList = async (tasklist: string): Promise<ITaskList> => {
  const { data } = await api.post("tasklist", { content: tasklist });
  return {
    ...data,
    createdAt: new Date(data.createdAt),
    updatedAt: new Date(data.updatedAt),
  };
};

export const updateTaskList = async (tasklist: ITaskList): Promise<ITaskList> => {
  const { data } = await api.put("tasklist/" + tasklist.id, tasklist);
  return {
    ...data,
    createdAt: new Date(data.createdAt),
    updatedAt: new Date(data.updatedAt),
  };
};

export const deleteTaskList = async (tasklistId: number): Promise<boolean> => {
  await api.delete("tasklist/" + tasklistId);

  return true;
};
