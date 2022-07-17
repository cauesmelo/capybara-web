import { toast } from "react-toastify";
import { useMutation } from "react-query";
import { useEffect, useState } from "react";
import { Button } from "../../../../common/components/Button";
import { queryClient } from "../../../../services/queryClient";
import { TextInput } from "../../../../common/components/TextInput";
import { TextInputInitialState } from "../../../../interfaces/ITextInputState";
import { GenericPopup, IGenericPopupProps } from "../../../../common/components/GenericPopup";
import { parseError } from "../../../../utils/parseError";
import { createTaskList } from "../../../../services/taskListService";
import {
  AddTaskButton,
  AddTaskButtonsContainer,
  AddTaskContainer,
  DeleteButton,
  NoTasks,
  Task,
  TasksContainer,
  TaskText,
} from "./style";
import { IoAddCircleOutline, IoInformationCircleOutline, IoTrashOutline } from "react-icons/io5";
import { ITaskListCreate } from "../../../../interfaces/ITaskList";

type CreatePopupProps = Pick<IGenericPopupProps, "show" | "onDismiss">;

export const Create = ({ show, onDismiss }: CreatePopupProps) => {
  const [title, setTitle] = useState(TextInputInitialState);
  const [newTask, setNewTask] = useState(TextInputInitialState);
  const [tasks, setTasks] = useState<string[]>([]);
  const [addTask, setAddTask] = useState(false);

  const createMutation = useMutation(async (tasklist: ITaskListCreate) => await createTaskList(tasklist), {
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
  });

  const handleCreate = async () => {
    if (title.content.length === 0) {
      setTitle({
        content: "",
        error: "Campo obrigatório",
      });
    } else {
      await createMutation.mutateAsync({
        title: title.content,
        tasks: tasks,
      });
    }
  };

  const handleAddTask = () => {
    if (newTask.content.length === 0) {
      setNewTask({
        content: "",
        error: "Campo obrigatório",
      });
    } else {
      setTasks((prevState) => [...prevState, newTask.content]);
      setAddTask(false);
      setNewTask(TextInputInitialState);
    }
  };

  const handleDeleteTask = (indexToRemove: number) => {
    setTasks((prevState) => prevState.filter((t, index) => index !== indexToRemove));
  };

  useEffect(() => {
    if (!show) {
      setTitle(TextInputInitialState);
      setTasks([]);
    }
  }, [show]);

  return (
    <GenericPopup isLoading={createMutation.isLoading} title="Nova lista de tarefas" onDismiss={onDismiss} show={show}>
      <TextInput state={[title, setTitle]} placeholder="Título da lista de tarefas" />

      <TasksContainer>
        {tasks.map((task, index) => (
          <Task>
            <TaskText>{task}</TaskText>
            <DeleteButton onClick={() => handleDeleteTask(index)}>
              <IoTrashOutline />
            </DeleteButton>
          </Task>
        ))}

        {tasks.length === 0 && (
          <NoTasks>
            <IoInformationCircleOutline />
            Nenhuma tarefa criada.
          </NoTasks>
        )}
      </TasksContainer>

      <AddTaskContainer>
        {addTask && (
          <>
            <TextInput state={[newTask, setNewTask]} placeholder="Nome da tarefa" />
            <AddTaskButtonsContainer>
              <Button small onClick={() => setAddTask(false)}>
                Cancelar
              </Button>
              <Button small onClick={handleAddTask}>
                Adicionar
              </Button>
            </AddTaskButtonsContainer>
          </>
        )}
        {!addTask && (
          <AddTaskButton onClick={() => setAddTask(true)}>
            <IoAddCircleOutline />
            Adicionar tarefa
          </AddTaskButton>
        )}
      </AddTaskContainer>

      <Button onClick={handleCreate}>Criar lista</Button>
    </GenericPopup>
  );
};
