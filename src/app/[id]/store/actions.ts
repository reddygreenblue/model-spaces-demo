import { useModelSpaceStore } from ".";
import { TModelSpaceStore } from "./types";

export const setTimeTakenToPredict = (timeTakenToPredict: number) =>
  useModelSpaceStore.setState({ timeTakenToPredict });

export const setfiles = (key: string, files: FileList | null) =>
  useModelSpaceStore.setState((state) => ({
    ...state,
    fileInputs: {
      ...state.fileInputs,
      [key]: files,
    },
  }));

export const setLastOutput = (lastOutput: TModelSpaceStore["lastOutput"]) =>
  useModelSpaceStore.setState((state) => ({
    ...state,
    lastOutput: {
      ...state.lastOutput,
      ...lastOutput,
    },
  }));
