import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import clsx from "clsx";

import { ChevronRight, ChevronLeft } from "lucide-react";
import { Frame } from "@/components/frame";

import { teamMembers } from "@/data/teamMembers";
import facebook from "@/assests/members/facebook-fill.svg";
import instagram from "@/assests/members/insta-fill.svg";
import twitter from "@/assests/members/twitter-fill.svg";
import youtube from "@/assests/members/youtube-fill.svg";

import "swiper/css";

export const TeamCarousel = () => {
  const [count, setCount] = useState(1);
  const maxCount = teamMembers.length - 2;

  const onNextClick = () => {
    setCount((prev) => {
      if (prev === maxCount) return maxCount;
      return prev + 1;
    });
  };

  const onPrevClick = () => {
    setCount((prev) => Math.max(prev - 1, 1));
  };

  return (
    <div className="relative w-full py-20">
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-nav-btn-next",
          prevEl: ".swiper-nav-btn-prev",
        }}
        breakpoints={{
          400: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        allowTouchMove={false}
        scrollbar={{ draggable: false }}
        className="mySwiper"
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={member.id} className="p-4 pb-10 sm:pb-0 lg:pt-28">
            <figure
              className={clsx(
                "my-10 flex-33 rounded-3xl bg-white px-8 py-10 shadow-[0px_0px_12px_0px_rgba(0,0,0,0.1)] transition-all duration-150",
                { "lg:-translate-y-20": index === count }
              )}
            >
              <div className="flex w-full items-center justify-center">
                <div className="pointer-events-none relative select-none">
                  <Frame className="absolute inset-0" />
                  <img
                    src={member.image}
                    alt={member.name}
                    className="translate-y-[4.5%] scale-105 rounded-full"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="mt-10 flex flex-col items-center space-y-6 text-center">
                <h3 className="text-2xl font-bold sm:text-3xl md:text-4xl">{member.name}</h3>
                <p className="text-2xl text-[#6C6C72] sm:text-3xl">{member.role}</p>
                <div className="!mt-10 flex w-full justify-between px-4">
                  <a href={member.socials.facebook} target="_blank" rel="noreferrer">
                    <img src={facebook.src} alt="facebook" className="w-8" />
                  </a>
                  <a href={member.socials.instagram} target="_blank" rel="noreferrer">
                    <img src={instagram.src} alt="instagram" className="w-8" />
                  </a>
                  <a href={member.socials.twitter} target="_blank" rel="noreferrer">
                    <img src={twitter.src} alt="twitter" className="w-8" />
                  </a>
                  <a href={member.socials.youtube} target="_blank" rel="noreferrer">
                    <img src={youtube.src} alt="youtube" className="w-8" />
                  </a>
                </div>
              </div>
            </figure>
          </SwiperSlide>
        ))}
        <div className="swiper-nav-btns absolute bottom-14 left-1/2 z-50 flex -translate-x-1/2 items-center gap-x-4 sm:bottom-4">
          <button
            type="button"
            className="swiper-nav-btn-prev rounded-full border border-primary bg-primary p-2"
            onClick={onPrevClick}
          >
            <ChevronLeft className="size-8" />
          </button>
          <button
            type="button"
            className="swiper-nav-btn-next rounded-full border border-black/40 bg-[#DEDEDE]/80 p-2"
            onClick={onNextClick}
          >
            <ChevronRight className="size-8" />
          </button>
        </div>
      </Swiper>
    </div>
  );
};
