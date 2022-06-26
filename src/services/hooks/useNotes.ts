import { useQuery } from "react-query";
import { getAllNotes } from "../notesService";

export const useNote = () => {
  return useQuery(["notes"], () => getAllNotes(), {
    staleTime: 1000 * 60 * 1, // 1 minuto
    refetchInterval: 1000 * 60 * 5, // 5 minutos
  });
};
