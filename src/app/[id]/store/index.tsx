import { create } from "zustand";
import { type TModelSpaceStore } from "./types";

export const modelSpaceStoreInitialState: TModelSpaceStore = {
  fileInputs: {},
  lastOutput: {
    isFetching: false,
    error: null,
    response: null,
  },
  timeTakenToPredict: 0,
};

export const useModelSpaceStore = create(() => modelSpaceStoreInitialState);
