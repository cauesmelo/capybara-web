import { Main } from "../common/components/Main";
import { PageWrapper } from "../common/components/PageWrapper";
import { SideMenu } from "../containers/SideMenu";

export const TasklistsPage = () => {
  return (
    <PageWrapper>
      <Main>
        <SideMenu selected={"tasklists"} />
        <p>Listas de tarefas</p>
      </Main>
    </PageWrapper>
  );
};
