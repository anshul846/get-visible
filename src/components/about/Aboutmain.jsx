import React from "react";
import Image from "next/image";

const Aboutmain = ({ heading }) => {
  return (
    <div>
      <div className="bg-[url(/images/png/about-bg.png)] w-full bg-center bg-cover bg-no-repeat h-full bg-[#003465]">
        <div className="max-w-[1505px] w-full mx-auto px-4 h-[1150px]">
          <h1 className="text-[#03498A] font-Montserrat text-[274px]  font-black uppercase text-center leading-[93%] relative z-30">
            {heading}
          </h1>

          <div>
            <Image
              className="absolute top-[-3%] z-50 left-[44%]"
              src="/images/png/space-plane.png"
              alt="space-plane-img"
              width={272}
              height={129}
            />
            <div className="bg-[url(/images/svg/yellow-triangle-rounded.svg)] max-w-[1035px] w-full h-[970px] absolute top-[10%] left-[26%] z-50 ">
              <div className="flex flex-col gap-[74px]">
                <div className="flex flex-col gap-[116px]">
                  <p className="text-[#003465] text-4xl text-center font-Montserrat font-black leading-[93%] uppercase pt-[249px] max-w-[474px] w-full mx-auto">
                    OUR MISSION
                  </p>
                  <p className="text-[#003465] text-center font-Montserrat text-[32px] font-bold leading-[120%] max-w-[590px] w-full mx-auto">
                    The Internet is overcrowded and millions and millions of
                    companies compete to get noticed.
                  </p>
                </div>
                <p className="text-[#003465] text-center font-Montserrat text-[18px] font-semibold leading-[160%] max-w-[563px] w-full mx-auto">
                  Just Get Visible ensures your brand shines alongside your
                  website, allowing you to stand out from the crowdthrough
                  experience, knowledge, and creativity. Just Get Visible
                  isalways at hand in the moments when most needed. Being
                  reliableand trustworthy ensures our customers will never leave
                  us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutmain;
