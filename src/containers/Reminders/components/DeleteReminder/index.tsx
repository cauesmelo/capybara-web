import { toast } from "react-toastify";
import { useMutation } from "react-query";
import { Button } from "../../../../common/components/Button";
import { queryClient } from "../../../../services/queryClient";
import { GenericPopup, IGenericPopupProps } from "../../../../common/components/GenericPopup";
import { deleteReminder } from "../../../../services/reminderService";
import { parseError } from "../../../../utils/parseError";
import { IReminder } from "../../../../interfaces/IReminder";
import { AlertText, Content, LineButton, ReminderShowCase } from "../../style";

interface DeleteReminderProps extends Pick<IGenericPopupProps, "show" | "onDismiss"> {
  selectedReminder: IReminder;
}

export const DeleteReminder = ({ selectedReminder, show, onDismiss }: DeleteReminderProps) => {
  const updateReminderMutation = useMutation(async (noteId: number) => await deleteReminder(noteId), {
    onSuccess: () => {
      queryClient.invalidateQueries("reminders");
      toast.success("Lembrete removida com sucesso");
    },
    onError: (err) => {
      console.error(err);
      toast.error(parseError(err));
    },
    onSettled: () => {
      onDismiss();
    },
  });

  const handleDeleteReminder = async () => {
    await updateReminderMutation.mutateAsync(selectedReminder.id);
  };

  return (
    <GenericPopup
      isLoading={updateReminderMutation.isLoading}
      title="Excluir lembrete"
      onDismiss={onDismiss}
      show={show}
    >
      <AlertText>
        Você está prestes a <span>EXCLUIR</span> o lembrete abaixo
      </AlertText>

      <ReminderShowCase>{selectedReminder.title}</ReminderShowCase>

      <LineButton>
        <Button danger onClick={handleDeleteReminder}>
          EXCLUIR
        </Button>
        <Button onClick={onDismiss}>Cancelar</Button>
      </LineButton>
    </GenericPopup>
  );
};
