import { Container, Icon, Menu, TextWrapper, Wrapper } from "./style";
import {
  IoAlarmOutline,
  IoBookOutline,
  IoListOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { useHistory } from "react-router-dom";

interface SideMenuProps {
  selected: string;
}

export const SideMenu = ({ selected }: SideMenuProps) => {
  const history = useHistory();

  const navigate = (location: string) => {
    if (location !== selected) history.push(location);
  };

  return (
    <Wrapper>
      <Container>
        <Menu selected={selected === "notes"} onClick={() => navigate("notes")}>
          <Icon>
            <IoBookOutline />
          </Icon>
          <TextWrapper>Notas</TextWrapper>
        </Menu>

        <Menu
          selected={selected === "tasklists"}
          onClick={() => navigate("tasklists")}
        >
          <Icon>
            <IoListOutline />
          </Icon>
          <TextWrapper>Listas de tarefas</TextWrapper>
        </Menu>

        <Menu
          selected={selected === "reminders"}
          onClick={() => navigate("reminders")}
        >
          <Icon>
            <IoAlarmOutline />
          </Icon>
          <TextWrapper>Lembretes</TextWrapper>
        </Menu>

        <Menu
          selected={selected === "preferences"}
          onClick={() => navigate("preferences")}
        >
          <Icon>
            <IoSettingsOutline />
          </Icon>
          <TextWrapper>Preferências</TextWrapper>
        </Menu>
      </Container>
    </Wrapper>
  );
};
