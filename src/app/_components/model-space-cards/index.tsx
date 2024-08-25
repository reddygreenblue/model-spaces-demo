"use client";

import Image from "next/image";
import Link from "next/link";
import { useModelSpacesQuery } from "~/app/hooks/useModelSpacesQuery";
import ErrorComponent from "~/components/error";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { TypographySmall } from "~/components/ui/typography";
import { useModelSpacesStore } from "../../store";
import { SkeletonCard } from "../skeleton-cards";

function ModelSpaceCards() {
  const { data = [], isError, isLoading, refetch } = useModelSpacesQuery();
  const searchKey = useModelSpacesStore((state) => state.searchKey);

  if (isError) {
    return <ErrorComponent retryHandler={() => refetch()} />;
  }

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {Array(4)
          .fill(null)
          .map((_, index) => (
            <SkeletonCard key={index} />
          ))}
      </div>
    );
  }
  const spaces = data?.filter((modelSpace) =>
    modelSpace.name.toLowerCase().includes(searchKey.toLowerCase()),
  );

  if(!spaces?.length && searchKey){
    return <TypographySmall><i>No Results</i></TypographySmall>
  }

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      {spaces.map((modelSpace) => (
        <Link href={`/${modelSpace.id}`} key={modelSpace.id}>
          <Card className="group flex h-auto transform cursor-pointer flex-col transition-transform duration-300 ease-in-out hover:shadow-xl dark:hover:shadow-gray-950 md:h-48 md:flex-row">
            {/* Image Section */}
            <div className="relative h-40 w-full overflow-hidden rounded-tl-md rounded-tr-none bg-white dark:bg-gray-900 md:h-auto md:w-2/5 md:rounded-l-md">
              <Image
                src={modelSpace.avatar}
                alt={modelSpace.name}
                fill
                className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 sm:m-auto sm:h-full sm:object-contain md:object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="flex w-full flex-col justify-between overflow-hidden p-4 md:w-3/5">
              <CardHeader className="p-0">
                <CardTitle className="text-base">{modelSpace.name}</CardTitle>
                <CardDescription className="overflow-hidden text-ellipsis text-xs">
                  {modelSpace.description}
                </CardDescription>
              </CardHeader>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
}

export default ModelSpaceCards;
