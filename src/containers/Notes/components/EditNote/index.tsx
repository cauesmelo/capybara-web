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
import { createNote, updateNote } from "../../../../services/notesService";
import { parseError } from "../../../../utils/parseError";
import { INote, INoteUpdate } from "../../../../interfaces/INote";

interface UpdateNoteProps
  extends Pick<IGenericPopupProps, "show" | "onDismiss"> {
  selectedNote: INote;
}

export const EditNote = ({
  selectedNote,
  show,
  onDismiss,
}: UpdateNoteProps) => {
  const [note, setNote] = useState(TextInputInitialState);

  const updateNoteMutation = useMutation(
    async (note: INoteUpdate) => await updateNote(note),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("notes");
        toast.success("Nota atualizada com sucesso");
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

  const handleEditNote = async () => {
    if (note.content.length === 0) {
      setNote({
        content: "",
        error: "Não é possível salvar uma nota vazia",
      });
    } else {
      await updateNoteMutation.mutateAsync({
        id: selectedNote.id,
        content: note.content,
      });
    }
  };

  useEffect(() => {
    if (show) {
      setNote({
        content: selectedNote.content,
        error: "",
      });
    }
  }, [show]);

  return (
    <GenericPopup
      isLoading={updateNoteMutation.isLoading}
      title="Atualizar nota"
      onDismiss={onDismiss}
      show={show}
    >
      <TextInput textarea state={[note, setNote]} />

      <Button type="Basic" onClick={handleEditNote}>
        Salvar
      </Button>
    </GenericPopup>
  );
};
