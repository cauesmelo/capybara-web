export interface INote {
  content: string;
  userId: string;
  id: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface INoteRaw {
  content: string;
  userId: string;
  id: number;
  createdAt: string;
  updatedAt: string;
}
