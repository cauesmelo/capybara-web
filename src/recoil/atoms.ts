import { whiteTheme } from "./../common/themes/white";
import { ITheme } from "../interfaces/ITheme";
import { atom } from "recoil";

export const themeState = atom<ITheme>({
  key: "themeState",
  default: whiteTheme,
});

export const authState = atom({
  key: "authState",
  default: undefined,
});
