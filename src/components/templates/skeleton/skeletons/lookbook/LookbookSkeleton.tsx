function LookbookSkeleton() {
  return (
    <>
      {/* Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16">
        <div className="space-y-4 animate-pulse">
          <div className="h-10 w-2/3 bg-snow/20 rounded" />
          <div className="h-10 w-1/2 bg-snow/20 rounded" />
        </div>

        <div className="aspect-3/4 bg-snow/20 rounded-2xl animate-pulse" />
      </div>

      {/* Row 2 */}
      <div className="mt-16 p-5 rounded-xl bg-onyx/40 border border-white/5">
        <div className="flex gap-2 flex-wrap">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="h-8 w-20 bg-snow/20 rounded-lg animate-pulse"
            />
          ))}
        </div>
      </div>

      {/* Row 3 */}
      <div className="mt-24 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="aspect-3/4 bg-snow/20 rounded-2xl animate-pulse"
          />
        ))}
      </div>
    </>
  );
}

export default LookbookSkeleton;
