import { AlertCircleIcon } from "lucide-react";
import { Button } from "~/components/ui/button";

function ErrorComponent({ retryHandler }: { retryHandler?: () => void }) {
  return (
    <div className="flex h-full flex-col items-center justify-center p-4 text-center">
      <AlertCircleIcon className="mb-4 h-24 w-24 text-red-600" />
      <h1 className="mb-2 text-2xl font-bold text-gray-900 dark:text-gray-100">
        Oops! There was an error.
      </h1>
      <p className="mb-6 text-gray-600 dark:text-gray-400">
        Something went wrong. Please try again.
      </p>
      {retryHandler && (
        <Button
          className="bg-blue-600 px-6 py-2 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
          onClick={() => retryHandler()}
        >
          Retry
        </Button>
      )}
    </div>
  );
}

export default ErrorComponent;
