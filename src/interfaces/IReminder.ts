export interface IReminder {
  id: number;
  title: string;
  reminderDate: Date;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IReminderRaw {
  id: number;
  title: string;
  reminderDate: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}
