import { useEffect, useState } from "react";
import { IoPencilOutline, IoTrashOutline } from "react-icons/io5";
import { useRecoilValue } from "recoil";
import { Button } from "../../common/components/Button";
import { SmallLoading } from "../../common/components/SmallLoading";
import { usePagination } from "../../common/hooks/usePagination";
import { IReminder } from "../../interfaces/IReminder";
import { authState } from "../../recoil/atoms";
import { api } from "../../services/api";
import { useReminder } from "../../services/hooks/useReminders";
import { CreateReminder } from "./components/CreateReminder";
import { DeleteReminder } from "./components/DeleteReminder";
import {
  Content,
  Line,
  Reminder,
  ReminderContent,
  ReminderCreation,
  ReminderMenu,
  ReminderMenuButton,
  Title,
  Wrapper,
} from "./style";

export const RemindersContainer = () => {
  const [showCreatePopup, setShowCreatePopup] = useState(false);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [selectedReminder, setSelectedReminder] = useState<IReminder>();

  const auth = useRecoilValue(authState);
  api.defaults.headers.common["Authorization"] = `Bearer ${auth?.token}`;

  const { pageItems, setAllItems, Pagination } = usePagination<IReminder>();

  const { data, isLoading } = useReminder();
  const reminders = data ?? [];

  const handleOpenCreate = () => {
    setShowCreatePopup(true);
  };

  const handleOpenDelete = (reminder: IReminder) => {
    setSelectedReminder(reminder);
    setShowDeletePopup(true);
  };

  useEffect(() => {
    setAllItems(reminders);
  }, [data]);

  return (
    <Wrapper>
      <Line>
        <Title>Lembretes</Title>
        <Button onClick={handleOpenCreate}>Criar lembrete</Button>
      </Line>

      <Content>
        {isLoading && <SmallLoading />}

        {!isLoading && (
          <>
            {pageItems.map((reminder) => (
              <Reminder key={reminder.id}>
                <ReminderMenu>
                  <ReminderMenuButton danger onClick={() => handleOpenDelete(reminder)}>
                    <IoTrashOutline />
                  </ReminderMenuButton>
                </ReminderMenu>

                <ReminderContent>
                  {reminder.title} - {reminder.reminderDate.toLocaleString("pt-BR")}
                </ReminderContent>

                <ReminderCreation>{reminder.createdAt.toLocaleString("pt-BR")}</ReminderCreation>
              </Reminder>
            ))}
            <Pagination />
          </>
        )}
      </Content>

      <CreateReminder show={showCreatePopup} onDismiss={() => setShowCreatePopup(false)} />

      {selectedReminder && (
        <DeleteReminder
          show={showDeletePopup}
          onDismiss={() => setShowDeletePopup(false)}
          selectedReminder={selectedReminder}
        />
      )}
    </Wrapper>
  );
};
