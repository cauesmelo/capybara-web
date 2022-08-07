import { useQuery } from "react-query";
import { getAllReminders } from "../reminderService";

export const useReminder = () => {
  return useQuery(["reminders"], () => getAllReminders(), {
    staleTime: 1000 * 60 * 1, // 1 minuto
    refetchInterval: 1000 * 60 * 5, // 5 minutos
  });
};
