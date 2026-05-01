import Skeleton from "../Skeleton";

export default function HeroSkeleton() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-6">
      <Skeleton className="h-10 w-64" />
      <Skeleton className="h-10 w-80" />

      <div className="flex gap-6 mt-4">
        <Skeleton className="h-10 w-32 rounded-full" />
        <Skeleton className="h-10 w-32 rounded-full" />
      </div>
    </div>
  );
}
