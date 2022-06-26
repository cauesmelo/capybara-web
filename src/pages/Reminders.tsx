import { Main } from "../common/components/Main";
import { PageWrapper } from "../common/components/PageWrapper";
import { SideMenu } from "../containers/SideMenu";

export const RemindersPage = () => {
  return (
    <PageWrapper>
      <Main>
        <SideMenu selected={"reminders"} />
        <p>Lembretes</p>
      </Main>
    </PageWrapper>
  );
};
