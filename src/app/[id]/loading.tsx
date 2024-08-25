import React from "react";
import { Loader } from "lucide-react";

const FullPageLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900">
      <div className="flex flex-col items-center">
        <Loader className="h-16 w-16 animate-spin text-gray-800 dark:text-gray-200" />
      </div>
    </div>
  );
};

export default FullPageLoader;
