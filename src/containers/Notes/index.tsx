import { useState } from "react";
import { IoPencilOutline, IoTrashOutline } from "react-icons/io5";
import { useRecoilValue } from "recoil";
import { Button } from "../../common/components/Button";
import { SmallLoading } from "../../common/components/SmallLoading";
import { authState } from "../../recoil/atoms";
import { api } from "../../services/api";
import { useNote } from "../../services/hooks/useNotes";
import { CreateNote } from "./components/CreateNote";
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

  const auth = useRecoilValue(authState);
  api.defaults.headers.common["Authorization"] = `Bearer ${auth?.token}`;

  const { data, isLoading } = useNote();
  const notes = data ?? [];

  const handleOpenCreate = () => {
    setShowCreatePopup(true);
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
              <NoteMenuButton>
                <IoPencilOutline />
              </NoteMenuButton>

              <NoteMenuButton danger>
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
    </Wrapper>
  );
};
