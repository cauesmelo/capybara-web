import { INote, INoteRaw, INoteUpdate } from "../interfaces/INote";
import { api } from "./api";

export const getAllNotes = async (): Promise<INote[]> => {
  const { data } = await api.get("note");

  return data.map((note: INoteRaw) => ({
    ...note,
    createdAt: new Date(note.createdAt),
    updatedAt: new Date(note.updatedAt),
  }));
};

export const createNote = async (note: string): Promise<INote> => {
  const { data } = await api.post("note", { content: note });
  return {
    ...data,
    createdAt: new Date(data.createdAt),
    updatedAt: new Date(data.updatedAt),
  };
};

export const updateNote = async (note: INoteUpdate): Promise<INote> => {
  const { data } = await api.put("note/" + note.id, { content: note.content });
  return {
    ...data,
    createdAt: new Date(data.createdAt),
    updatedAt: new Date(data.updatedAt),
  };
};
