"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

import Image from "next/image";

type ImageType = {
  artistName: string;
  artistSlug: string;
  id: string;
  title: string;
  coverUrl: string;
};

type LookBookSwiperProps = {
  images: ImageType[];
};

export default function LookBookSwiper({ images }: LookBookSwiperProps) {
  const enableSliderFeatures = images.length >= 6;

  return (
    <div className="relative w-full">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        loop={enableSliderFeatures}
        autoplay={
          enableSliderFeatures
            ? {
                delay: 3000,
                disableOnInteraction: false,
              }
            : false
        }
        coverflowEffect={{
          rotate: 25,
          stretch: 0,
          depth: 120,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={
          enableSliderFeatures
            ? {
                clickable: true,
                el: ".custom-pagination",
                renderBullet: (index, className) => {
                  return `<span class="${className} custom-bullet"></span>`;
                },
              }
            : false
        }
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="w-full"
      >
        {images.map((img) => (
          <SwiperSlide key={img.id}>
            <div className="relative w-full h-100 rounded-2xl overflow-hidden">
              <Image
                src={img.coverUrl}
                alt="Tattoo style"
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                //priority={img.id === 1}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom Pagination Container */}
      {enableSliderFeatures && (
        <div className="custom-pagination flex justify-center mt-6 gap-3" />
      )}
    </div>
  );
}
