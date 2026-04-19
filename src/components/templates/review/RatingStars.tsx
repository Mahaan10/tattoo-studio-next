import { Star } from "lucide-react";

function RatingStars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1 mt-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={16}
          className={
            star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-400"
          }
        />
      ))}
    </div>
  );
}

export default RatingStars;
