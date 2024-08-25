"use client";

import React from "react";

const Error = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900">
      <div className="flex flex-col items-center">
        Oops. There was some unexpected error.
      </div>
    </div>
  );
};

export default Error;
