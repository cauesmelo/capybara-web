import axios from "axios";

export const api = axios.create({
  baseURL: "https://capybaranotes.azurewebsites.net",
});
