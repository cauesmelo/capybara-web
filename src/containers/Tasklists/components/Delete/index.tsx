import { toast } from "react-toastify";
import { useMutation } from "react-query";
import { Button } from "../../../../common/components/Button";
import { queryClient } from "../../../../services/queryClient";
import { TextInput } from "../../../../common/components/TextInput";
import { GenericPopup, IGenericPopupProps } from "../../../../common/components/GenericPopup";
import { deleteTaskList } from "../../../../services/taskListService";
import { parseError } from "../../../../utils/parseError";
import { ITaskList } from "../../../../interfaces/ITaskList";
import { AlertText, Content, LineButton, ShowCase } from "../../style";

interface DeleteTaskListProps extends Pick<IGenericPopupProps, "show" | "onDismiss"> {
  selectedTaskList: ITaskList;
}

export const DeleteTaskList = ({ selectedTaskList, show, onDismiss }: DeleteTaskListProps) => {
  const updateTaskListMutation = useMutation(async (tasklistId: number) => await deleteTaskList(tasklistId), {
    onSuccess: () => {
      queryClient.invalidateQueries("tasklists");
      toast.success("Lista de tarefa removida com sucesso");
    },
    onError: (err) => {
      console.error(err);
      toast.error(parseError(err));
    },
    onSettled: () => {
      onDismiss();
    },
  });

  const handleDeleteTaskList = async () => {
    await updateTaskListMutation.mutateAsync(selectedTaskList.id);
  };

  return (
    <GenericPopup
      isLoading={updateTaskListMutation.isLoading}
      title="Excluir lista de tarefas"
      onDismiss={onDismiss}
      show={show}
    >
      <AlertText>
        Você está prestes a <span>EXCLUIR</span> a lista de tarefas com título abaixo
      </AlertText>

      <ShowCase>{selectedTaskList.title}</ShowCase>

      <LineButton>
        <Button danger onClick={handleDeleteTaskList}>
          EXCLUIR
        </Button>
        <Button onClick={onDismiss}>Cancelar</Button>
      </LineButton>
    </GenericPopup>
  );
};
