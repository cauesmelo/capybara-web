import { toast } from "react-toastify";
import { useMutation } from "react-query";
import { ChangeEvent, useEffect, useState } from "react";
import { Button } from "../../../../common/components/Button";
import { queryClient } from "../../../../services/queryClient";
import { TextInput } from "../../../../common/components/TextInput";
import { TextInputInitialState } from "../../../../interfaces/ITextInputState";
import { GenericPopup, IGenericPopupProps } from "../../../../common/components/GenericPopup";
import { createReminder } from "../../../../services/reminderService";
import { parseError } from "../../../../utils/parseError";

type CreateReminderPopupProps = Pick<IGenericPopupProps, "show" | "onDismiss">;

export const CreateReminder = ({ show, onDismiss }: CreateReminderPopupProps) => {
  const [reminder, setReminder] = useState(TextInputInitialState);
  const [date, setDate] = useState(new Date());

  const createReminderMutation = useMutation(async (reminder: string) => await createReminder(reminder, date), {
    onSuccess: () => {
      queryClient.invalidateQueries("reminders");
      toast.success("Lembrete criado com sucesso");
    },
    onError: (err) => {
      console.error(err);
      toast.error(parseError(err));
    },
    onSettled: () => {
      onDismiss();
    },
  });

  const handleCreateReminder = async () => {
    if (reminder.content.length === 0) {
      setReminder({
        content: "",
        error: "Não é possível criar um lembrete vazio",
      });
    } else {
      await createReminderMutation.mutateAsync(reminder.content);
    }
  };

  const handleChangeDate = (e: ChangeEvent<HTMLInputElement>) => {
    setDate(new Date(e.target.value));
  };

  useEffect(() => {
    if (!show) {
      setReminder(TextInputInitialState);
    }
  }, [show]);

  return (
    <GenericPopup isLoading={createReminderMutation.isLoading} title="Nova lembrete" onDismiss={onDismiss} show={show}>
      <TextInput textarea state={[reminder, setReminder]} />

      <input type="datetime-local" onChange={handleChangeDate} />

      <br />
      <br />

      <Button onClick={handleCreateReminder}>Criar lembrete</Button>
    </GenericPopup>
  );
};
