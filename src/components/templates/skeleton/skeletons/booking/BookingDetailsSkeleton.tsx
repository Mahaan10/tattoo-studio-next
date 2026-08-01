function Skeleton({ className = "" }: { className?: string }) {
  return (
    <div
      className={`
        relative overflow-hidden rounded-xl
        bg-carbon-black
        ${className}
      `}
    >
      <div
        className="
          absolute inset-0
          -translate-x-full
          animate-[shimmer_1.8s_infinite]
          bg-linear-to-r
          from-transparent
          via-white/10
          to-transparent
        "
      />
    </div>
  );
}

function SkeletonCard({
  titleWidth = "w-36",
  children,
}: {
  titleWidth?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl bg-onyx p-5 shadow-sm">
      <Skeleton className={`h-5 ${titleWidth} mb-6`} />

      <div className="space-y-4">{children}</div>
    </div>
  );
}

export default function BookingDetailsSkeleton() {
  return (
    <div className="p-4 md:p-6 space-y-8">
      {/* Header */}
      <div>
        <Skeleton className="h-4 w-36 mb-6" />

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
          <div>
            <div className="flex items-center gap-3">
              <Skeleton className="h-9 w-64" />
              <Skeleton className="h-9 w-32 rounded-full" />
            </div>

            <Skeleton className="h-4 w-48 mt-4" />
          </div>

          <Skeleton className="h-11 w-44 rounded-xl" />
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left */}
        <div className="space-y-6">
          {/* Summary */}
          <SkeletonCard>
            <div className="grid grid-cols-2 gap-4">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="rounded-xl bg-carbon-black border border-snow/10 p-4"
                >
                  <Skeleton className="h-3 w-20 mb-4" />
                  <Skeleton className="h-7 w-24" />
                </div>
              ))}
            </div>
          </SkeletonCard>

          {/* Client */}
          <SkeletonCard>
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="flex justify-between border-b border-snow/10 pb-3"
              >
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-36" />
              </div>
            ))}
          </SkeletonCard>

          {/* Booking Info */}
          <SkeletonCard>
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="flex justify-between border-b border-snow/10 pb-3"
              >
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-32" />
              </div>
            ))}
          </SkeletonCard>

          {/* Tattoo Details */}
          <SkeletonCard>
            {[...Array(2)].map((_, i) => (
              <div key={i}>
                <Skeleton className="h-4 w-28 mb-2" />
                <Skeleton className="h-28 w-full rounded-xl" />
              </div>
            ))}
          </SkeletonCard>
        </div>

        {/* Right */}
        <div className="space-y-6">
          {/* Images */}
          <SkeletonCard>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[...Array(6)].map((_, i) => (
                <Skeleton key={i} className="aspect-3/4 w-full rounded-xl" />
              ))}
            </div>
          </SkeletonCard>

          {/* Payments */}
          <SkeletonCard>
            {[...Array(3)].map((_, i) => (
              <div key={i} className="rounded-xl bg-carbon-black p-4 space-y-4">
                <div className="flex justify-between">
                  <Skeleton className="h-5 w-24" />
                  <Skeleton className="h-8 w-28 rounded-full" />
                </div>

                <Skeleton className="h-4 w-36" />
                <Skeleton className="h-4 w-28" />
                <Skeleton className="h-4 w-24" />
              </div>
            ))}
          </SkeletonCard>
        </div>
      </div>
    </div>
  );
}
