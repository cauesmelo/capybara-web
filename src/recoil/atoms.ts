import { retrieveCredentials } from "./../utils/retrieveCredentials";
import { whiteTheme } from "./../common/themes/white";
import { ITheme } from "../interfaces/ITheme";
import { atom } from "recoil";
import { IUser } from "../interfaces/IUser";

export const themeState = atom<ITheme>({
  key: "themeState",
  default: whiteTheme,
});

export const authState = atom<IUser | undefined>({
  key: "authState",
  default: retrieveCredentials(),
});
