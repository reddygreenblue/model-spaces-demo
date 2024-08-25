export type TModelSpaceStore = {
  fileInputs: Record<string, FileList | null>;
  lastOutput: {
    isFetching: boolean;
    error: unknown;
    response: Record<string, unknown> | null;
  };
  timeTakenToPredict: number;
};
