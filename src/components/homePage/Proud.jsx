"use client";
import React, { createContext } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { ProudSwiperSlides } from "../common/Helper";
import Image from "next/image";
import Link from "next/link";

// Your data

const Proud = () => {
  return (
    <section className="bg-[url(/assets/images/proud-bg.png)] flex flex-col gap-0">
      {/* Top Section */}
      <div className="flex flex-col pt-[371px] gap-[100px] max-xl:pt-[200px] max-md:gap-[50px]">
        <div className="text-white text-[80px] font-black leading-[93px] uppercase pl-[276px] pr-[600px] max-2xl:text-[70px] max-[1440px]:text-[60px] max-[1440px]:leading-[67px] max-xl:text-[40px] max-xl:leading-[40px] max-xl:pl-4 max-md:pr-0 max-md:text-[25px] max-md:leading-[33px]">
          Proud to have delivered
        </div>

        {/* Swiper */}
        <div className="pl-[230px] max-sm:pl-[110px] max-[320px]:pl-[68px]">
          <Swiper
            spaceBetween={40}
            slidesPerView={"auto"}
            grabCursor={true}
            className="mySwiper"
          >
            {ProudSwiperSlides.map((slide, index) => (
              <SwiperSlide
                key={index}
                className="flex flex-col gap-[37px] max-w-[723px] w-full max-2xl:max-w-[580px] max-[1440px]:max-w-[500px] max-lg:max-w-[300px] max-md:gap-4 max-sm:max-w-[230px] max-[320px]:max-w-[180px]"
              >
                <span>
                  <Link href="#">
                    <Image
                      width={723}
                      height={528}
                      src={slide.img}
                      alt={`slide-${index}`}
                    />
                  </Link>
                </span>
                <div className="flex flex-col text-white text-[40px] font-black leading-[93px] uppercase self-start max-lg:leading-[40px] max-lg:text-[30px] max-md:text-[20px] max-md:leading-[30px] text-left">
                  <span>{slide.title}</span>
                  <span className="text-xl font-bold leading-8 max-lg:text-base">
                    {slide.subtitle}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Bottom Content */}
      <div className="flex flex-col">
        <span>
          <Image
            width={1920}
            height={1382}
            className="mt-[-170px] max-md:mt-[-90px] max-sm:mt-[-50px]"
            src="/assets/images/proud-men.png"
            alt="mike"
          />
        </span>

        <div className="max-w-[1565px] w-full mx-auto mt-[-390px] px-4 flex flex-col gap-[65px] items-center pb-[430px] max-2xl:mt-[-285px] max-xl:pb-[100px] max-lg:mt-[-230px] max-lg:gap-[30px] max-md:mt-[-140px] max-sm:mt-[-50px] max-sm:gap-5">
          <div className="text-white text-[115px] font-black leading-[109px] uppercase text-center max-2xl:text-[69px] max-2xl:leading-[95px] max-[1440px]:text-[65px] max-xl:text-[30px] max-lg:text-[25px] max-sm:leading-[43px]">
            <span className="text-[#F9DD00]">transforming </span> <br /> visions
            into visibility
          </div>
          <span className="text-white text-xl font-Montserrat font-bold leading-8  max-w-[1090px] w-full text-center max-xl:text-base max-lg:text-xs max-lg:mt-[-40px] max-lg:leading-[18px] max-lg:max-w-[750px] max-sm:mt-[0px]">
            At Just Get visible, we highlight brands with innovative solutions,
            individual strategies and relentless dedication. We strive to
            empower companies to stand out, engage with your audience and thrive
            in a dynamic world.
          </span>
          <span className="h-[50px] max-w-[413px] w-full bg-[#F9DD00] rounded-xl p-[10px] flex justify-center items-center text-[#003465] text-base font-bold leading-[14px] cursor-pointer duration-300 hover:text-[#F9DD00] hover:outline-double hover:bg-[#003465] max-lg:h-[40px] max-lg:w-[300px] max-[320px]:w-[240px] max-[320px]:text-[13px]">
            Learn More About our Methods
          </span>
        </div>
      </div>
    </section>
  );
};

export default Proud;
