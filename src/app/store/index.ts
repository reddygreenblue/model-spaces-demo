import { create } from "zustand";
import { type TModelSpacesStore } from "./types";

const initialState: TModelSpacesStore = {
  searchKey: "",
};

export const useModelSpacesStore = create(() => initialState);
