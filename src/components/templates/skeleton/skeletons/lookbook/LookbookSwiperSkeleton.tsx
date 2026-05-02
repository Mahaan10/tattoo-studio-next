function LookbookSwiperSkeleton() {
  return (
    <div className="relative w-full flex items-center justify-center h-100">
      <div className="flex gap-4 items-center">
        {/* Left faded card */}
        <div className="w-32 h-72 bg-snow/20 rounded-2xl blur-[1px] scale-90 opacity-60 animate-pulse" />

        {/* Center main card */}
        <div className="w-40 h-80 bg-snow/20 rounded-2xl animate-pulse" />

        {/* Right faded card */}
        <div className="w-32 h-72 bg-snow/20 rounded-2xl blur-[1px] scale-90 opacity-60 animate-pulse" />
      </div>
    </div>
  );
}

export default LookbookSwiperSkeleton;
