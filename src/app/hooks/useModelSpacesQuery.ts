import { useQuery } from "@tanstack/react-query";
import { getModelSpaces } from "../api/getModelSpaces";

export const useModelSpacesQuery = () => {
  return useQuery({
    queryKey: ["model-spaces"],
    queryFn: () => getModelSpaces(),
  });
};
