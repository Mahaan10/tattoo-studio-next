import Skeleton from "../Skeleton";

function CardSkeleton() {
  return (
    <div className="relative w-full aspect-3/4 rounded-2xl overflow-hidden">
      <Skeleton className="w-full h-full" />

      {/* Bottom label */}
      <div className="absolute bottom-0 w-full p-4">
        <Skeleton className="h-10 w-full" />
      </div>
    </div>
  );
}

export default CardSkeleton;
