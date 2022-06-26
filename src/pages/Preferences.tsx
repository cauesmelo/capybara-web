import { Main } from "../common/components/Main";
import { PageWrapper } from "../common/components/PageWrapper";
import { SideMenu } from "../containers/SideMenu";

export const PreferencesPage = () => {
  return (
    <PageWrapper>
      <Main>
        <SideMenu selected={"preferences"} />
        <p>Preferências</p>
      </Main>
    </PageWrapper>
  );
};
