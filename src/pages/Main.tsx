import { useState } from "react";
import { Main } from "../common/components/Main";
import { PageWrapper } from "../common/components/PageWrapper";
import { NotesContainer } from "../containers/Notes";
import { PreferencesContainer } from "../containers/Preferences";
import { RemindersContainer } from "../containers/Reminders";
import { SideMenu } from "../containers/SideMenu";
import { TasklistsContainer } from "../containers/Tasklists";

export const MainPage = () => {
  const [selected, setSelected] = useState("notes");

  return (
    <PageWrapper>
      <Main>
        <SideMenu selected={selected} setSelected={setSelected} />
        {selected === "notes" && <NotesContainer />}

        {selected === "tasklists" && <TasklistsContainer />}

        {selected === "reminders" && <RemindersContainer />}

        {selected === "preferences" && <PreferencesContainer />}
      </Main>
    </PageWrapper>
  );
};
