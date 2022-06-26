import { Main } from "../common/components/Main";
import { PageWrapper } from "../common/components/PageWrapper";
import { SideMenu } from "../containers/SideMenu";

export const NotesPage = () => {
  return (
    <PageWrapper>
      <Main>
        <SideMenu selected={"notes"} />
        <p>Notes</p>
      </Main>
    </PageWrapper>
  );
};
