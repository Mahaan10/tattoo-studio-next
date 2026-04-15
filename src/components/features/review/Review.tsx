"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useRef } from "react";
import useReview from "./useReview";
import Image from "next/image";

function Review() {
  const { reviews } = useReview();
  const reviewSwiperRef = useRef<any>(null);

  console.log("reviews =>", reviews);
  return (
    <section className="mt-10 border border-snow/20 rounded-xl shadow shadow-alabaster/20 bg-onyx">
      <div className="flex items-center py-10 px-4">
        <div className="w-[20%] flex flex-col items-center justify-between h-50">
          <p className="text-center text-base">Wanna share your feedback?</p>
          <button className="border border-snow/20 shadow shadow-snow/45 px-3 py-2 hover:shadow-sm rounded-lg hover:border-snow/50 transition-all duration-200 w-full md:w-[80%]">
            Click here
          </button>
        </div>
        {/* Swiper comments */}
        <Swiper
          modules={[Autoplay]}
          onSwiper={(swiper) => (reviewSwiperRef.current = swiper)}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          //spaceBetween={25}
          loop
          className="w-[70%]"
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            // 640: {
            //   slidesPerView: 2,
            // },
            768: {
              slidesPerView: 2,
            },
            // 1024: {
            //   slidesPerView: 2,
            // },
          }}
        >
          {reviews?.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="bg-onyx rounded-2xl border text-sm border-snow/20 flex flex-col mx-2 w-96 shadow shadow-alabaster/20">
                <div className="px-4 py-2 flex items-center justify-between border-b border-snow/20">
                  <div className="flex items-center justify-center gap-x-2">
                    <Image
                      src={review?.authorPhotoUrl}
                      alt={review?.authorName}
                      width={35}
                      height={35}
                      className="object-cover"
                    />
                    <span className="font-bold">{review?.authorName}</span>
                  </div>
                  <span className="text-xs">
                    {review?.relativeTimeDescription}
                  </span>
                </div>
                <div className="px-4">
                  {/* <div className="text-left mt-4 text-xs">
                    <Rating>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <RatingStar key={star} filled={star <= review.rating} />
                  ))}
                </Rating>
                    {review.stars}
                  </div> */}
                  <div className="text-left mt-4 text-xs">{review?.rating}</div>
                  <div className="mt-4 text-sm flex-1 overflow-y-auto h-30">
                    {review.text}
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
