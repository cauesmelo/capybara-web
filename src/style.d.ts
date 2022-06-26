import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    strongBg: string;
    semiStrongBg: string;
    mediumBg: string;
    lightBg: string;
    mediumFont: string;
    lightFont: string;
    borderRadius: string;
    error: string;
  }
}
