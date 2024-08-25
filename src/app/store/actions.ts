import { useModelSpacesStore } from ".";

export const setSearchKey = (searchKey: string) => useModelSpacesStore.setState({ searchKey });
