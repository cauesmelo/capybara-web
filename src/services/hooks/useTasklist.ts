import { useQuery } from "react-query";
import { getAllTaskLists } from "../taskListService";

export const useTaskList = () => {
  return useQuery(["tasklists"], () => getAllTaskLists(), {
    staleTime: 1000 * 60 * 1, // 1 minuto
    refetchInterval: 1000 * 60 * 5, // 5 minutos
  });
};
