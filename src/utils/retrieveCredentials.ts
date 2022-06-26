import { IUser } from "../interfaces/IUser";

export const retrieveCredentials = (): IUser | undefined => {
  const data = localStorage.getItem("@capybaraData");

  if (data) return JSON.parse(data) as IUser;
};
