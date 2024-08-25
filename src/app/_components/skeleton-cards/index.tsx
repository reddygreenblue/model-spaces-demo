import { Card } from "~/components/ui/card";
import { Skeleton } from "~/components/ui/skeleton";

export function SkeletonCard() {
  return (
    <Card className="group flex h-auto transform flex-col md:h-48 md:flex-row">
      {/* Skeleton Image Section */}
      <Skeleton className="relative h-40 w-full overflow-hidden rounded-t-md md:h-auto md:w-2/5 md:rounded-l-md" />

      {/* Skeleton Content Section */}
      <div className="flex w-full flex-col p-4 md:w-3/5">
        <Skeleton className="mb-2 h-6 w-3/4" /> {/* Title skeleton */}
        <Skeleton className="h-4 w-full" /> {/* Description skeleton */}
        <Skeleton className="mt-1 h-4 w-full" /> {/* Description skeleton */}
      </div>
    </Card>
  );
}
