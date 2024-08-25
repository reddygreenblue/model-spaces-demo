import { type AxiosResponse } from "axios";
import { apiClient } from "~/api/api-client";
import { type TModelSpace } from "../types";

export async function getModelSpace(id: string): Promise<TModelSpace> {
  try {
    const response: AxiosResponse<TModelSpace> =
      await apiClient.get<TModelSpace>(`/model-spaces/${id}`);

    return response.data;
  } catch (error) {
    console.error("Error fetching model space:", error);
    throw error;
  }
}
