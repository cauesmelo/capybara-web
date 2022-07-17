import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { Button } from "../../common/components/Button";
import { SmallLoading } from "../../common/components/SmallLoading";
import { usePagination } from "../../common/hooks/usePagination";
import { ITaskList } from "../../interfaces/ITaskList";
import { authState } from "../../recoil/atoms";
import { api } from "../../services/api";
import { useTaskList } from "../../services/hooks/useTasklist";
import { Create } from "./components/Create";
import { DeleteTaskList } from "./components/Delete";
import { TasklistCard } from "./components/TasklistCard";
import { Content, Line, Title, Wrapper } from "./style";

export const TasklistsContainer = () => {
  const [showCreatePopup, setShowCreatePopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [selectedTaskList, setSelectedTaskList] = useState<ITaskList>();

  const auth = useRecoilValue(authState);
  api.defaults.headers.common["Authorization"] = `Bearer ${auth?.token}`;

  const { data, isLoading } = useTaskList();
  const tasklists = data ?? [];
  const { pageItems, setAllItems, Pagination } = usePagination<ITaskList>(tasklists);

  const handleOpenCreate = () => {
    setShowCreatePopup(true);
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
              <TasklistCard tasklist={tasklist} onDelete={() => handleOpenDelete(tasklist)} />
            ))}
            <Pagination />
          </>
        )}
      </Content>

      <Create show={showCreatePopup} onDismiss={() => setShowCreatePopup(false)} />

      {selectedTaskList && (
        <DeleteTaskList
          show={showDeletePopup}
          onDismiss={() => setShowDeletePopup(false)}
          selectedTaskList={selectedTaskList}
        />
      )}
    </Wrapper>
  );
};
