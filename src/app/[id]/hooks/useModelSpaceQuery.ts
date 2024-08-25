import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { TModelSpace } from "../types";
import { getModelSpace } from "../api/getModelSpace";

export const useModelSpaceQuery = <T = TModelSpace>({
  id,
  select,
}: {
  id: string;
  select?: (data: TModelSpace) => T;
}) => {
  return useQuery<TModelSpace, AxiosError, T>({
    queryKey: ["model-space", id],
    queryFn: () => getModelSpace(id),
    select,
  });
};

export const inputsSelector = (data: TModelSpace) => data.inputs;
