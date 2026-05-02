function ArtistListSkeleton() {
  return (
    <div className="w-full aspect-3/4 rounded-2xl border border-snow/20 bg-onyx p-4 animate-pulse">
      {/* Image placeholder */}
      <div className="w-full h-full rounded-xl bg-snow/20" />

      {/* Name badge */}
      <div className="absolute top-4 left-4">
        <div className="h-5 w-24 bg-snow/20 rounded-xl" />
      </div>
    </div>
  );
}

export default ArtistListSkeleton;
