import { useEffect, useState } from "react";
import { IoPencilOutline, IoTrashOutline } from "react-icons/io5";
import { useRecoilValue } from "recoil";
import { Button } from "../../common/components/Button";
import { SmallLoading } from "../../common/components/SmallLoading";
import { usePagination } from "../../common/hooks/usePagination";
import { ITaskList } from "../../interfaces/ITaskList";
import { authState } from "../../recoil/atoms";
import { api } from "../../services/api";
import { useTaskList } from "../../services/hooks/useTasklist";
import { Create } from "./components/Create";
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

export const TasklistsContainer = () => {
  const [showCreatePopup, setShowCreatePopup] = useState(false);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [selectedTaskList, setSelectedTaskList] = useState<ITaskList>();

  const auth = useRecoilValue(authState);
  api.defaults.headers.common["Authorization"] = `Bearer ${auth?.token}`;

  const { data, isLoading } = useTaskList();
  console.log(data);
  const tasklists = data ?? [];
  const { pageItems, setAllItems, Pagination } =
    usePagination<ITaskList>(tasklists);

  const handleOpenCreate = () => {
    setShowCreatePopup(true);
  };

  const handleOpenEdit = (tasklist: ITaskList) => {
    setSelectedTaskList(tasklist);
    setShowEditPopup(true);
  };

  const handleOpenDelete = (tasklist: ITaskList) => {
    setSelectedTaskList(tasklist);
    setShowDeletePopup(true);
  };

  useEffect(() => {
    setAllItems(tasklists);
  }, [data]);

  return (
    <Wrapper>
      <Line>
        <Title>Listas de tarefas</Title>
        <Button onClick={handleOpenCreate}>Criar lista</Button>
      </Line>

      <Content>
        {isLoading && <SmallLoading />}

        {!isLoading && (
          <>
            {pageItems.map((tasklist) => (
              <Note key={tasklist.id}>
                <NoteMenu>
                  <NoteMenuButton onClick={() => handleOpenEdit(tasklist)}>
                    <IoPencilOutline />
                  </NoteMenuButton>

                  <NoteMenuButton
                    danger
                    onClick={() => handleOpenDelete(tasklist)}
                  >
                    <IoTrashOutline />
                  </NoteMenuButton>
                </NoteMenu>

                <NoteContent>{tasklist.title}</NoteContent>

                <NoteCreation>
                  {tasklist.createdAt.toLocaleDateString("pt-BR")}
                </NoteCreation>
              </Note>
            ))}
            <Pagination />
          </>
        )}
      </Content>

      <Create
        show={showCreatePopup}
        onDismiss={() => setShowCreatePopup(false)}
      />

      {/* {selectedTaskList && (
        <EditNote
          show={showEditPopup}
          onDismiss={() => setShowEditPopup(false)}
          selectedNote={selectedTaskList}
        />
      )}

      {selectedTaskList && (
        <DeleteNote
          show={showDeletePopup}
          onDismiss={() => setShowDeletePopup(false)}
          selectedNote={selectedTaskList}
        />
      )} */}
    </Wrapper>
  );
};
