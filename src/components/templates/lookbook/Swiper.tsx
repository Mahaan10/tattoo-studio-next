"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules"

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"

import Image from "next/image"

type ImageType = {
    id: number
    src: string
}

type LookBookSwiperProps = {
    images: ImageType[]
}

export default function LookBookSwiper({ images }: LookBookSwiperProps) {
    return (
        <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            loop={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            coverflowEffect={{
                rotate: 25,
                stretch: 0,
                depth: 120,
                modifier: 1,
                slideShadows: true,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="w-full"
        >
            {images.slice(0, 6).map((img) => (
                <SwiperSlide key={img.id}>
                    <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">
                        <Image
                            src={img.src}
                            alt="Tattoo style"
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover"
                            priority={img.id === 1}
                        />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}