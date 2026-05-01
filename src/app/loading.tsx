import CardSkeleton from "@/components/templates/skeleton/skeletons/CardSkeleton";
import HeroSkeleton from "@/components/templates/skeleton/skeletons/HeroSkeleton";
import ReviewSkeleton from "@/components/templates/skeleton/skeletons/ReviewSkeleton";

function Loading() {
  return (
    <div className="animate-pulse">
      {/* Hero Section */}
      {/* <div className="h-screen w-full bg-onyx flex flex-col items-center justify-center gap-10">
        <div className="h-16 w-64 bg-snow/10 rounded-md" />
        <div className="h-16 w-80 bg-snow/10 rounded-md" />

        <div className="flex gap-6 mt-6">
          <div className="h-10 w-32 bg-snow/10 rounded-full" />
          <div className="h-10 w-32 bg-snow/10 rounded-full" />
        </div>
      </div> */}
      <HeroSkeleton />

      {/* Grid Section */}
      <div className="py-16 px-[5%]">
        <div className="container mx-auto">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              // <div key={i} className="aspect-3/4 bg-snow/10 rounded-2xl" />
              <CardSkeleton key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
