import { IReminder, IReminderRaw } from "../interfaces/IReminder";
import { api } from "./api";

export const getAllReminders = async (): Promise<IReminder[]> => {
  const { data } = await api.get("reminder");

  return data.map((reminder: IReminderRaw) => ({
    ...reminder,
    reminderDate: new Date(reminder.reminderDate),
    createdAt: new Date(reminder.createdAt),
    updatedAt: new Date(reminder.updatedAt),
  }));
};

export const createReminder = async (reminder: string, date: Date): Promise<IReminder> => {
  const { data } = await api.post("reminder", { title: reminder, reminderDate: date });
  return {
    ...data,
    reminderDate: new Date(data.reminderDate),
    createdAt: new Date(data.createdAt),
    updatedAt: new Date(data.updatedAt),
  };
};

export const deleteReminder = async (reminderId: number): Promise<boolean> => {
  await api.delete("reminder/" + reminderId);

  return true;
};
