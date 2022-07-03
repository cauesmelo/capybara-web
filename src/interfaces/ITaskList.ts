export interface ITaskList {
  id: number;
  title: string;
  userId: string;
  tasks: ITaskUnity[];
  createdAt: Date;
  updatedAt: Date;
}

export interface ITaskListRaw {
  content: string;
  userId: string;
  id: number;
  createdAt: string;
  updatedAt: string;
}

export interface ITaskUnity {
  id: number;
  title: string;
  isComplete: boolean;
}
