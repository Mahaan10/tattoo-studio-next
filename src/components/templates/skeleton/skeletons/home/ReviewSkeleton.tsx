function ReviewSkeleton() {
  return (
    <div className="bg-onyx rounded-2xl border border-snow/20 flex flex-col mx-2 h-full shadow shadow-alabaster/20 p-4 animate-pulse">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-snow/20 pb-2">
        <div className="flex items-center gap-x-2">
          <div className="w-8 h-8 rounded-full bg-snow/20" />
          <div className="h-3 w-20 bg-snow/20 rounded" />
        </div>
        <div className="h-3 w-12 bg-snow/20 rounded" />
      </div>

      {/* Content */}
      <div className="py-3 flex flex-col flex-1">
        {/* Stars */}
        <div className="flex gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-4 h-4 bg-snow/20 rounded" />
          ))}
        </div>

        {/* Text */}
        <div className="space-y-2">
          <div className="h-3 bg-snow/20 rounded w-full" />
          <div className="h-3 bg-snow/20 rounded w-5/6" />
          <div className="h-3 bg-snow/20 rounded w-2/3" />
        </div>
      </div>
    </div>
  );
}

export default ReviewSkeleton;
