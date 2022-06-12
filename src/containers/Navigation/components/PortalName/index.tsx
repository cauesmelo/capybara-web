import { CapybaraIcon } from "../../../../common/icons/Capybara";
import { Wrapper, PortalTitle } from "./style";

export const PortalName = ({ ...rest }) => {
  return (
    <Wrapper {...rest}>
      <CapybaraIcon white />
      <PortalTitle>Capybara</PortalTitle>
    </Wrapper>
  );
};
