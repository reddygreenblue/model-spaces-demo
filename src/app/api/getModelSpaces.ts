import { apiClient } from "~/api/api-client";
import { TModelSpaceDetails } from "../types";

export async function getModelSpaces(): Promise<TModelSpaceDetails[]> {
  try {
    const response = await apiClient.get<TModelSpaceDetails[]>("/model-spaces");
    return response.data;
  } catch (error) {
    console.error("Error fetching model spaces:", error);
    throw error;
  }
}
