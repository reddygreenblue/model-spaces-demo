import { unknown } from "zod";
import { apiClient } from "~/api/api-client";

export const postModelSpacePredict = async (
  id: string,
  body: Record<string, string>,
) => {
  try {
    const response = await apiClient.post<unknown, Record<string, unknown>>(`/model-spaces/${id}/predict`, body);
    return response.data;
  } catch (error) {
    console.error("Error in predicting model space:", error);
    throw error;
  }
};
