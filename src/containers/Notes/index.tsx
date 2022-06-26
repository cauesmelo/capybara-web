import { useEffect, useState } from "react";
import { IoPencilOutline, IoTrashOutline } from "react-icons/io5";
import { useRecoilValue } from "recoil";
import { Button } from "../../common/components/Button";
import { SmallLoading } from "../../common/components/SmallLoading";
import { usePagination } from "../../common/hooks/usePagination";
import { INote } from "../../interfaces/INote";
import { authState } from "../../recoil/atoms";
import { api } from "../../services/api";
import { useNote } from "../../services/hooks/useNotes";
import { CreateNote } from "./components/CreateNote";
import { DeleteNote } from "./components/DeleteNote";
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

  const { pageItems, setAllItems, Pagination } = usePagination<INote>();

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

  useEffect(() => {
    setAllItems(notes);
  }, [data]);

  return (
    <Wrapper>
      <Line>
        <Title>Notas</Title>
        <Button onClick={handleOpenCreate}>Criar nota</Button>
      </Line>

      <Content>
        {isLoading && <SmallLoading />}

        {pageItems.map((note) => (
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
        <Pagination />
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

      {selectedNote && (
        <DeleteNote
          show={showDeletePopup}
          onDismiss={() => setShowDeletePopup(false)}
          selectedNote={selectedNote}
        />
      )}
    </Wrapper>
  );
};
