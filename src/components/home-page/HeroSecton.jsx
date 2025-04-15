"use client";
import React from "react";
import Image from "next/image";

const HeroSecton = () => {
  return (
    <section className="max-w-[1920px] w-full bg-[#003465] px-4">
      <article className="section1 bg-[url(/Assets/img/1pencil.png)] pt-[70px] max-xl:pt-0 max-lg:pt-0">
        <div className="flex flex-col max-w-[1492px] w-full mx-auto justify-start">
          <h1 className="text-white text-[72.728px] tracking-wider font-black leading-[93px] text-center max-[1440px]:text-[62px] max-[1440px]:text-center max-[1440px]:pr-0 max-[1280px]:text-[58px] max-lg:text-[47px] max-md:text-[33px] max-md:leading-[60px] max-sm:text-[27px] max-sm:mt-[-30px] max-[425px]:text-[25px] max-[425px]:leading-[35px] max-[425px]:pb-2 max-[320px]:text-[13px] max-[320px]:mt-[-48px]">
            STAND OUT FROM THE <i>CROWD</i>
          </h1>
          <span className="max-w-[1492px] w-full mt-[-12px]">
            <Image
              width={1492}
              height={500}
              className="max-w-[1492px] w-full"
              src="/assets/images/hero-bg.png"
              alt="elders"
            />
          </span>
        </div>
      </article>
    </section>
  );
};

export default HeroSecton;
