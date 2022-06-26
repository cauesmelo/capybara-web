import { Main } from "../common/components/Main";
import { PageWrapper } from "../common/components/PageWrapper";
import { NotesContainer } from "../containers/Notes";
import { SideMenu } from "../containers/SideMenu";

export const NotesPage = () => {
  return (
    <PageWrapper>
      <Main>
        <SideMenu selected={"notes"} />
        <NotesContainer />
      </Main>
    </PageWrapper>
  );
};
