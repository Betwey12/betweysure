"use client";

import heroSlideOne from "../../assets/images/hero-slide-one.webp";
import heroSlideTwo from "../../assets/images/hero-slide-two.webp";
import heroSlideThree from "../../assets/images/hero-slide-three.webp";
import heroSlideFour from "../../assets/images/hero-slide-four.webp";
import heroSlideFive from "../../assets/images/hero-slide-five.webp";

// Import Swiper React components
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay } from "swiper/modules";
import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface HomeHeroSwiperProps {
  children: React.ReactNode;
}

export default function HomeHeroSwiper({ children }: HomeHeroSwiperProps) {
  const swiperRef = useRef<SwiperRef>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const handlePaginationClick = useCallback((index: number) => {
    if (swiperRef.current) {
      swiperRef.current?.swiper.slideTo(index);
      setCurrentSlide(index);
    }
  }, []);

  return (
    <div className="h-[680px] w-full bg-cover bg-no-repeat bg-[57%_0%] lg:bg-[0_0] relative">
      <Swiper
        ref={swiperRef}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
        onSlideChange={handleSlideChange}
      >
        {images.map((slide, index) => (
          <SwiperSlide className="" key={index}>
            <Image
              width={1200}
              height={700}
              src={slide}
              alt="hero-slides-sports"
              loading={index > 0 ? "lazy" : undefined}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="z-50 top-0 absolute w-full h-full bg-black/70 flex flex-col justify-end px-4 lg:px-20 gap-8 items-start pb-32 lg:pb-20">
        {children}

        <div className="flex items-center gap-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={cn("bg-white w-3 h-3 rounded-full cursor-pointer", {
                "bg-cyan": index === currentSlide,
              })}
              onClick={() => handlePaginationClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const images = [
  heroSlideOne,
  heroSlideTwo,
  heroSlideThree,
  heroSlideFour,
  heroSlideFive,
];
