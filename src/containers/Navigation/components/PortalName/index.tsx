import { Wrapper, PortalTitle } from "./style";

export const PortalName = ({ ...rest }) => {
  return (
    <Wrapper {...rest}>
      {/* <DeliverablesIcon /> */}
      <PortalTitle>Portal Deliverables</PortalTitle>
    </Wrapper>
  );
};
