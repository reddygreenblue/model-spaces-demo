import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { setLastOutput, setTimeTakenToPredict } from "../store/actions";
import { postModelSpacePredict } from "../api/postModelSpacePredict";

export const usePredictMutationKey = ["predicate"];

export const usePredictModelSpace = ({ id }: { id: string }) => {
  let timeTaken: number;

  return useMutation({
    mutationKey: usePredictMutationKey,
    mutationFn: (body: Record<string, string>) => {
      return postModelSpacePredict(id, body);
    },
    onMutate: () => {
      setLastOutput({
        isFetching: true,
        error: null,
        response: null,
      });

      return {
        startTime: performance.now(),
      };
    },
    onSuccess: (data) => {
      setLastOutput({
        isFetching: false,
        error: null,
        response: data,
      });
    },
    onError: (error) => {
      console.log(error);
      setLastOutput({
        isFetching: false,
        error: error,
        response: null,
      });
      toast.error("Oops. There was an error!");
    },
    onSettled: (data, error, variables, context) => {
      console.log(context);
      if (context?.startTime) {
        setTimeTakenToPredict(performance.now() - context?.startTime);
      }
    },
  });
};
