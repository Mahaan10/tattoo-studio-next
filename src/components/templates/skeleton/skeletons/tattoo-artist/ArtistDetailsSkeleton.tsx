function ArtistDetailsSkeleton() {
  return (
    <div className="animate-pulse space-y-6">
      {/* Cover */}
      <div className="w-full aspect-3/4 bg-snow/20 rounded-2xl" />

      {/* Info */}
      <div className="space-y-3">
        <div className="h-6 w-48 bg-snow/20 rounded" />
        <div className="h-4 w-32 bg-snow/20 rounded" />
      </div>

      {/* Gallery */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="aspect-square bg-snow/20 rounded-xl" />
        ))}
      </div>
    </div>
  );
}

export default ArtistDetailsSkeleton;
