"use client";

import React from "react";
import { useModelSpacesStore } from "~/app/store";
import { setSearchKey } from "~/app/store/actions";
import { Input } from "~/components/ui/input";

function Search() {
  const searchKey = useModelSpacesStore((state) => state.searchKey);

  return (
    <Input
      type="text"
      placeholder="Search"
      className="mb-8 mt-4 w-full border border-gray-300 bg-white text-black placeholder-gray-500 transition duration-300 ease-in-out focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-400 dark:focus:ring-blue-400 sm:w-96"
      value={searchKey}
      onChange={(e) => setSearchKey(e.target.value)}
    />
  );
}

export default Search;
