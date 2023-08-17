import axios from "axios";

export const vercel = axios.create({
  baseURL: "https://api.vercel.com/v9",
  timeout: 8 * 1000,
});
