"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useRef } from "react";
import formattedDate from "@/components/utils/formattedDate";

const commentReviews = [
  {
    id: 1,
    stars: "⭐⭐⭐⭐⭐",
    name: "Mahan",
    review: "It was a great exprience to got my first tattoo there!!",
    createdAt: new Date(),
  },
  {
    id: 2,
    stars: "⭐⭐",
    name: "Mahan",
    review: "It was a great exprience",
    createdAt: new Date(),
  },
  {
    id: 3,
    stars: "⭐⭐⭐⭐",
    name: "Mahan",
    review: "It was a great exprience",
    createdAt: new Date(),
  },
  {
    id: 4,
    stars: "⭐⭐⭐",
    name: "Mahan",
    review: "It was a great exprience",
    createdAt: new Date(),
  },
  {
    id: 5,
    stars: "⭐",
    name: "Mahan",
    review: "It was a great exprience",
    createdAt: new Date(),
  },
];

function Review() {
  const reviewSwiperRef = useRef<any>(null);

  return (
    <section className="mt-10 border border-snow/20 rounded-xl shadow shadow-alabaster/20 bg-onyx">
      <div className="flex items-center py-10 px-4">
        <div className="w-[25%]">Give us your Review</div>
        {/* Swiper comments */}
        <Swiper
          modules={[Autoplay]}
          onSwiper={(swiper) => (reviewSwiperRef.current = swiper)}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          //spaceBetween={25}
          loop
          className="w-[75%]"
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
        >
          {commentReviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="bg-onyx rounded-2xl border text-sm border-snow/20 flex flex-col mx-2 w-96 shadow shadow-alabaster/20">
                <div className="px-4 py-2 flex items-center justify-between border-b border-snow/20">
                  <span className="font-bold">{review.name}</span>
                  {formattedDate(review.createdAt)}
                </div>
                <div className="px-4">
                  <div className="text-left mt-4 text-xs">
                    {/* <Rating>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <RatingStar key={star} filled={star <= review.rating} />
                  ))}
                </Rating> */}
                    {review.stars}
                  </div>
                  <div className="mt-4 text-sm flex-1 overflow-y-auto h-30">
                    {review.review}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Review;
