"use client";

import Image from "next/image";
import ErrorComponent from "~/components/error";
import { Skeleton } from "~/components/ui/skeleton";
import { TypographyH2, TypographySmall } from "~/components/ui/typography";
import ModelInput from "./_components/model-input";
import ModelOutput from "./_components/model-output";
import { useModelSpaceQuery } from "./hooks/useModelSpaceQuery";
import { type TModelSpace } from "./types";

export default function ModelSpace({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  const {
    data: modelSpace = {} as TModelSpace,
    isError,
    refetch,
    isLoading,
  } = useModelSpaceQuery({ id });

  if (isError) {
    return (
      <div className="h-screen">
        <ErrorComponent retryHandler={() => refetch()} />
      </div>
    );
  }

  return (
    <main className="flex flex-col p-6 sm:p-12">
      <div className="flex w-full gap-4">
        <div className="relative h-full">
          <div className="relative h-[2rem] w-[2rem] sm:h-[3rem] sm:w-[3rem]">
            {isLoading ? (
              <Skeleton className="h-[2rem] w-[2rem] sm:h-[3rem] sm:w-[3rem]" />
            ) : (
              <Image
                alt={modelSpace?.name}
                src={modelSpace?.avatar}
                fill
                className="object-contain"
              />
            )}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {isLoading ? (
            <Skeleton className="h-8 w-52 sm:h-9" />
          ) : (
            <TypographyH2>{modelSpace?.name}</TypographyH2>
          )}
          {isLoading ? (
            <>
              <Skeleton className="h-4 w-96 sm:h-5" />
              <Skeleton className="h-4 w-[50vw] sm:h-5" />
            </>
          ) : (
            <TypographySmall className="text-muted-foreground">
              {modelSpace?.description}
            </TypographySmall>
          )}
        </div>
      </div>

      <div className="flex flex-grow flex-col gap-4 pt-8 lg:h-[30rem] lg:flex-row">
        <div className="flex-grow lg:w-1/2">
          <ModelInput id={id} />
        </div>
        <div className="flex-grow lg:w-1/2">
          <ModelOutput />
        </div>
      </div>
    </main>
  );
}
