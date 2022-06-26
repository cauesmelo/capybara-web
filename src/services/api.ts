import axios from "axios";

export const api = axios.create({
  baseURL: "https://capybaranotes.azurewebsites.net/api/",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});
