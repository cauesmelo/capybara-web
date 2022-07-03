import { toast } from "react-toastify";
import { useMutation } from "react-query";
import { Button } from "../../../../common/components/Button";
import { queryClient } from "../../../../services/queryClient";
import {
  GenericPopup,
  IGenericPopupProps,
} from "../../../../common/components/GenericPopup";
import { deleteNote } from "../../../../services/notesService";
import { parseError } from "../../../../utils/parseError";
import { INote } from "../../../../interfaces/INote";
import { AlertText, Content, LineButton, NoteShowCase } from "../../style";

interface DeleteNoteProps
  extends Pick<IGenericPopupProps, "show" | "onDismiss"> {
  selectedNote: INote;
}

export const DeleteNote = ({
  selectedNote,
  show,
  onDismiss,
}: DeleteNoteProps) => {
  const updateNoteMutation = useMutation(
    async (noteId: number) => await deleteNote(noteId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("notes");
        toast.success("Nota removida com sucesso");
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

  const handleDeleteNote = async () => {
    await updateNoteMutation.mutateAsync(selectedNote.id);
  };

  return (
    <GenericPopup
      isLoading={updateNoteMutation.isLoading}
      title="Excluir nota"
      onDismiss={onDismiss}
      show={show}
    >
      <AlertText>
        Você está prestes a <span>EXCLUIR</span> a nota abaixo
      </AlertText>

      <NoteShowCase>{selectedNote.content}</NoteShowCase>

      <LineButton>
        <Button danger onClick={handleDeleteNote}>
          EXCLUIR
        </Button>
        <Button onClick={onDismiss}>Cancelar</Button>
      </LineButton>
    </GenericPopup>
  );
};
