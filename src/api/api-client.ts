/* eslint-disable @typescript-eslint/no-unsafe-return */

import axios from "axios";
import { env } from "~/env";

export const apiClient = axios.create({
  baseURL: env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    Accept: "application/json",
  },
  timeout: 10000,
});

apiClient.interceptors.response.use((response) => {
  return response.data;
});
