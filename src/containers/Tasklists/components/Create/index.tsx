import { toast } from "react-toastify";
import { useMutation } from "react-query";
import { useEffect, useState } from "react";
import { Button } from "../../../../common/components/Button";
import { queryClient } from "../../../../services/queryClient";
import { TextInput } from "../../../../common/components/TextInput";
import { TextInputInitialState } from "../../../../interfaces/ITextInputState";
import {
  GenericPopup,
  IGenericPopupProps,
} from "../../../../common/components/GenericPopup";
import { parseError } from "../../../../utils/parseError";
import { createTaskList } from "../../../../services/taskListService";
import { ITaskUnity } from "../../../../interfaces/ITaskList";

type CreatePopupProps = Pick<IGenericPopupProps, "show" | "onDismiss">;

export const Create = ({ show, onDismiss }: CreatePopupProps) => {
  const [title, setTitle] = useState(TextInputInitialState);

  const [tasks, setTasks] = useState<ITaskUnity[]>([]);

  const createMutation = useMutation(
    async (note: string) => await createTaskList(note),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("tasklists");
        toast.success("Lista de tarefas criada com sucesso");
      },
      onError: (err) => {
        console.error(err);
        toast.error(parseError(err));
      },
      onSettled: () => {
        onDismiss();
      },
    }
  );

  const handleCreate = async () => {
    if (title.content.length === 0) {
      setTitle({
        content: "",
        error: "Não é possível criar uma nota vazia",
      });
    } else {
      await createMutation.mutateAsync(title.content);
    }
  };

  useEffect(() => {
    if (!show) {
      setTitle(TextInputInitialState);
    }
  }, [show]);

  return (
    <GenericPopup
      isLoading={createMutation.isLoading}
      title="Nova lista de tarefas"
      onDismiss={onDismiss}
      show={show}
    >
      <TextInput state={[title, setTitle]} title="Título" />

      <Button onClick={handleCreate}>Criar lista</Button>
    </GenericPopup>
  );
};
