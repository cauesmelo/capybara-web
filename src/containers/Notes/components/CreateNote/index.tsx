import React from "react";
import { toast } from "react-toastify";
import { useRecoilValue } from "recoil";
import { useMutation } from "react-query";
import { useEffect, useState } from "react";
import { Button } from "../../../../common/components/Button";
import { queryClient } from "../../../../services/queryClient";
import { IInputState } from "../../../../interfaces/IInputState";
import { IReactState } from "../../../../interfaces/IReactState";
import { hasEmptyInputs } from "../../../../utils/hasEmptyInputs";
import { TextInput } from "../../../../common/components/TextInput";
import { TextInputInitialState } from "../../../../interfaces/ITextInputState";
import {
  GenericPopup,
  IGenericPopupProps,
} from "../../../../common/components/GenericPopup";
import { createNote } from "../../../../services/notesService";
import { parseError } from "../../../../utils/parseError";

type CreateDisciplinePopupProps = Pick<
  IGenericPopupProps,
  "show" | "onDismiss"
>;

export const CreateNote = ({ show, onDismiss }: CreateDisciplinePopupProps) => {
  const [note, setNote] = useState(TextInputInitialState);

  const createDisciplineMutation = useMutation(
    async (note: string) => await createNote(note),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("notes");
        toast.success("Nota criada com sucesso");
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

  const handleCreateDiscipline = async () => {
    if (note.content.length === 0) {
      setNote({
        content: "",
        error: "Não é possível criar uma nota vazia",
      });
    } else {
      await createDisciplineMutation.mutateAsync(note.content);
    }
  };

  useEffect(() => {
    if (!show) {
      setNote(TextInputInitialState);
    }
  }, [show]);

  return (
    <GenericPopup
      isLoading={createDisciplineMutation.isLoading}
      title="Nova nota"
      onDismiss={onDismiss}
      show={show}
    >
      <TextInput textarea state={[note, setNote]} />

      <Button type="Basic" onClick={handleCreateDiscipline}>
        Criar nota
      </Button>
    </GenericPopup>
  );
};
