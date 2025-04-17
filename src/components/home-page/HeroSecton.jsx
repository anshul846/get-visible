import React from "react";

const HeroSecton = () => {
  return (
    <section className="max-w-[1920px] w-full bg-[#003465] px-4">
      <article class="section1 bg-[url(/Assets/img/1pencil.png)] pt-[70px] max-xl:pt-0 max-lg:pt-0">
        <div class="flex flex-col max-w-[1492px] w-full mx-auto justify-start">
          <h1 class="text-white text-[72.728px] font-black leading-[93px] text-right pr-[105px] max-[1440px]:text-[62px] max-[1440px]:text-center max-[1440px]:pr-0 max-[1280px]:text-[58px] max-lg:text-[47px] max-md:text-[33px] max-md:leading-[60px] max-sm:text-[27px] max-sm:mt-[-30px] max-[425px]:text-[25px] max-[425px]:leading-[35px] max-[425px]:pb-2 max-[320px]:text-[13px] max-[320px]:mt-[-48px]">
            STAND OUT FROM THE <i>CROWD</i>
          </h1>
          <span class="max-w-[1492px] w-full mt-[-12px]">
            <img
              class="max-w-[1492px] w-full"
              src="./assets/img/Group 9493 (1).png"
              alt="elders"
            />
          </span>
        </div>
      </article>
    </section>
  );
};

export default HeroSecton;
