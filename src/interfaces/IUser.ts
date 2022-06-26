import { IAvailableThemes } from "./IAvailableThemes";

export interface IUser {
  token: string;
  theme: IAvailableThemes;
  emailNotification: string;
  email: string;
  name: string;
}

export interface ICreateUser {
  name: string;
  email: string;
  password: string;
}

export interface IAuthenticateUser {
  email: string;
  password: string;
}
