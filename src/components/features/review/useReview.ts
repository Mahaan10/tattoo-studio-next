import getReviewsApi from "@/components/services/reviewService";
import { useQuery } from "@tanstack/react-query";

export default function useReview() {
  const { data, isLoading: reviewsIsLoading } = useQuery({
    queryKey: ["reviews"],
    queryFn: getReviewsApi,
  });

  const reviews = data?.reviews || [];

  return { reviews, reviewsIsLoading };
}
