"use client";

import { LoaderPinwheel } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";
import ErrorComponent from "~/components/error";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import { Separator } from "~/components/ui/separator";
import { TypographyP } from "~/components/ui/typography";
import { cn } from "~/lib/tailwind-util";
import { isValidHttpUrl } from "~/lib/valid-url";
import { modelSpaceStoreInitialState, useModelSpaceStore } from "../../store";
import { setLastOutput, setTimeTakenToPredict } from "../../store/actions";

const Output = () => {
  const lastOuput = useModelSpaceStore((state) => state.lastOutput);

  if (lastOuput.isFetching) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center">
        <LoaderPinwheel className="h-16 w-16 animate-spin text-gray-800 dark:text-gray-200" />
      </div>
    );
  }

  if (lastOuput.error) {
    return <ErrorComponent />;
  }

  const output = Object.values(
    (lastOuput?.response as Record<string, string | string[]>) || {},
  )[0];

  if (!output) {
    return null;
  }

  if (typeof output === "string") {
    if (isValidHttpUrl(output)) {
      return (
        <div className="relative h-full w-full">
          <Image
            alt={"Prediction image"}
            src={output}
            fill
            className="object-contain"
            sizes="50vw"
          />
        </div>
      );
    }

    return <TypographyP>{output}</TypographyP>;
  }

  if (Array.isArray(output) && output.every((item) => isValidHttpUrl(item))) {
    return (
      <div className="h-full w-full">
        <Carousel className="h-full w-full">
          <CarouselContent className="h-full w-full">
            {output.map((url, index) => {
              return (
                <CarouselItem key={index} className="h-full w-full">
                  <div key={index} className="relative h-96 w-full">
                    <Image
                      alt={`Slide ${index + 1}`}
                      src={url}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </div>
    );
  }

  return JSON.stringify(output);
};

const ModelOutput = () => {
  const timeTakenToPredict = useModelSpaceStore(
    (state) => state.timeTakenToPredict,
  );

  useEffect(
    () => () => {
      setTimeTakenToPredict(0);
      setLastOutput(modelSpaceStoreInitialState.lastOutput);
    },
    [],
  );

  return (
    <div
      className={cn(
        "flex h-full w-full flex-col gap-2 border bg-neutral-200 p-4 dark:bg-neutral-800",
        {
          "hidden lg:block": !timeTakenToPredict,
        },
      )}
    >
      <div className="h-full flex-grow">
        <Output />
      </div>
      {timeTakenToPredict ? (
        <>
          <Separator />
          <div className="">
            <b>Time taken: </b>
            {timeTakenToPredict.toFixed(3)} ms
          </div>
        </>
      ) : null}
    </div>
  );
};

export default ModelOutput;
