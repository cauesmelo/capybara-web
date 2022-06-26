import { useState } from "react";
import { IoPencilOutline, IoTrashOutline } from "react-icons/io5";
import { useRecoilValue } from "recoil";
import { Button } from "../../common/components/Button";
import { SmallLoading } from "../../common/components/SmallLoading";
import { INote } from "../../interfaces/INote";
import { authState } from "../../recoil/atoms";
import { api } from "../../services/api";
import { useNote } from "../../services/hooks/useNotes";
import { CreateNote } from "./components/CreateNote";
import { EditNote } from "./components/EditNote";
import {
  Content,
  Line,
  Note,
  NoteContent,
  NoteCreation,
  NoteMenu,
  NoteMenuButton,
  Title,
  Wrapper,
} from "./style";

export const NotesContainer = () => {
  const [showCreatePopup, setShowCreatePopup] = useState(false);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [selectedNote, setSelectedNote] = useState<INote>();

  const auth = useRecoilValue(authState);
  api.defaults.headers.common["Authorization"] = `Bearer ${auth?.token}`;

  const { data, isLoading } = useNote();
  const notes = data ?? [];

  const handleOpenCreate = () => {
    setShowCreatePopup(true);
  };

  const handleOpenEdit = (note: INote) => {
    setSelectedNote(note);
    setShowEditPopup(true);
  };

  const handleOpenDelete = (note: INote) => {
    setSelectedNote(note);
    setShowDeletePopup(true);
  };

  return (
    <Wrapper>
      <Line>
        <Title>Notas</Title>
        <Button onClick={handleOpenCreate}>Criar nota</Button>
      </Line>

      <Content>
        {isLoading && <SmallLoading />}

        {notes.map((note) => (
          <Note key={note.id}>
            <NoteMenu>
              <NoteMenuButton onClick={() => handleOpenEdit(note)}>
                <IoPencilOutline />
              </NoteMenuButton>

              <NoteMenuButton danger onClick={() => handleOpenDelete(note)}>
                <IoTrashOutline />
              </NoteMenuButton>
            </NoteMenu>

            <NoteContent>{note.content}</NoteContent>

            <NoteCreation>
              {note.createdAt.toLocaleDateString("pt-BR")}
            </NoteCreation>
          </Note>
        ))}
      </Content>

      <CreateNote
        show={showCreatePopup}
        onDismiss={() => setShowCreatePopup(false)}
      />

      {selectedNote && (
        <EditNote
          show={showEditPopup}
          onDismiss={() => setShowEditPopup(false)}
          selectedNote={selectedNote}
        />
      )}
    </Wrapper>
  );
};
