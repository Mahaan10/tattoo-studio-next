import Skeleton from "../Skeleton";

export default function ReviewSkeleton() {
  return (
    <div className="rounded-2xl border border-snow/20 p-4 flex flex-col gap-3">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Skeleton className="w-8 h-8 rounded-full" />
          <Skeleton className="h-3 w-20" />
        </div>
        <Skeleton className="h-3 w-12" />
      </div>

      {/* Stars */}
      <Skeleton className="h-4 w-24" />

      {/* Text */}
      <div className="space-y-2">
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-[90%]" />
        <Skeleton className="h-3 w-[70%]" />
      </div>
    </div>
  );
}
