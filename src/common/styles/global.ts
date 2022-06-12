import { createGlobalStyle } from "styled-components";
import { Reset } from "./reset";
import { Defaults } from "./defaults";
import { Fonts } from "./fonts";
import { Keyframes } from "./keyframes";

export const GlobalStyle = createGlobalStyle`
  ${Reset};
  ${Defaults};
  ${Fonts};
  ${Keyframes};
`;
