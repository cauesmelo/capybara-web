import { IAuthenticateUser, ICreateUser } from "./../interfaces/IUser";
import { IUser } from "../interfaces/IUser";
import { api } from "./api";

export const createAccount = async (user: ICreateUser): Promise<boolean> => {
  await api.post("user", user);
  return true;
};

export const authenticateUser = async (
  user: IAuthenticateUser
): Promise<IUser> => {
  const { data } = await api.post("login", user);
  return data;
};
