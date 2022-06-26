import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5029/api/",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});
