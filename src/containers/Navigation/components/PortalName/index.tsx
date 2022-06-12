import { Wrapper, PortalTitle } from "./style";

export const PortalName = ({ ...rest }) => {
  return (
    <Wrapper {...rest}>
      <PortalTitle>Capybara</PortalTitle>
    </Wrapper>
  );
};
