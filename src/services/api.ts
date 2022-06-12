import axios from "axios";

export const api = axios.create({
  baseURL: "https://ferramentasdeliverables.azurewebsites.net/api/",
});
