import axios from "axios";
import { env } from "~/env";

export const apiClient = axios.create({
  baseURL: env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    Accept: "application/json",
  },
  timeout: 10000,
});
