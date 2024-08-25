import { create } from "zustand";
import { TModelSpacesStore } from "./types";

const initialState: TModelSpacesStore = {
  searchKey: "",
};

export const useModelSpacesStore = create(() => initialState);
