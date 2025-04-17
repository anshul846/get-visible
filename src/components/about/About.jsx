import React from "react";
import Image from "next/image";
import { howsection } from "../common/Helper";
import Aboutmain from "./Aboutmain";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

const About = () => {
  return (
    <div>
      <Navbar />

      {/* <Aboutmain heading="aboutus" /> */}
      <div className=" bg-[#003465]   w-full relative  p-[30px] sm:p-[50px] md:p-[70px] lg:pb-[100px]">
        <Image
          src="/images/svg/line.svg"
          width={1820}
          height={80}
          alt="line-svg"
          className="absolute top-[275px] left-0 hidden xl:flex"
        />
        <div className="max-w-[1505px] w-full mx-auto ">
          <p className="text-white text-center font-Montserrat text-[28px] sm:text-[50px] md:text-[70px] lg:text-[80px] font-black leading-[93%] uppercase">
            HOW WE WORK
          </p>

          <div className="xl:flex justify-between items-start gap-12 pt-[59px] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            {howsection.map((items, index) => (
              <div
                key={index}
                className="flex flex-col gap-[24px] sm:gap-[60px] md:gap-[80px]  xl:gap-[153px]"
              >
                <p className="text-white font-Montserrat text-[20px] md:text-[28px] lg:text-[40px] font-black leading-[93%] uppercase lg:max-w-[392px] w-full">
                  {items.heading}
                </p>
                <p className="lg:max-w-[329px] w-full text-white font-Montserrat text-[16px] md:text-[17px] font-normal leading-[160%]">
                  {items.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* people secction start */}
      <div className="flex flex-col gap-8 sm:gap-14 md:gap-18 lg:gap-25 max-w-[1505px] w-full mx-auto p-[40px] sm:p-[60px] md:p-[80px] lg:p-[116px] xl:p-[170px]">
        <p className="text-[#003465] text-center font-Montserrat text-[28px] sm:text-[50px] md:text-[70px] lg:text-[80px] font-black leading-[93%] uppercase max-w-[941px] w-full mx-auto">
          people we have worked with
        </p>

        <div className="flex flex-col gap-[60px]">
          <div className="lg:flex items-center justify-between gap-8 grid md:grid-cols-3 grid-cols-2">
            <Image
              src="/images/png/islam-logo.png"
              alt="islam-logo"
              width={203}
              height={98}
            />
            <Image
              src="/images/png/franzos-logo.png"
              alt="franzos-logo"
              width={203}
              height={98}
            />
            <Image
              src="/images/png/network-rail-logo.png"
              alt="network-rail-logo"
              width={203}
              height={98}
            />
            <Image
              src="/images/png/etthi-base-logo.png"
              alt="etthi-base-logo"
              width={203}
              height={98}
            />
          </div>
          <div className="lg:flex items-center justify-between gap-8 grid md:grid-cols-3 grid-cols-2">
            <Image
              src="/images/png/clarke-chapman-logo.png"
              width={194}
              height={105}
              alt="clarke-chapman-logo"
            />
            <Image
              src="/images/png/sk-foods-logo.png"
              width={194}
              height={105}
              alt="sk-foods-logo"
            />
            <Image
              src="/images/png/duronic-logo.png"
              width={194}
              height={105}
              alt="duronic-logo"
            />
            <Image
              src="/images/png/ams-logo.png"
              width={194}
              height={105}
              alt="ams-logo"
            />
          </div>
        </div>
      </div>
      {/* people secction-end */}

      {/* We are always on section start */}
      <div className="bg-[#003465] w-full p-[24px] sm:p-[60px] md:p-[80px]  lg:p-[150px]  xl:p-[200px_200px_160px_180px]">
        <div className="max-w-[1505px] w-full mx-auto flex gap-5 justify-between items-center lg:flex-row flex-col-reverse">
          <div>
            <div className="flex flex-col gap-[41px]">
              <p className="text-white font-Montserrat text-[24px] sm:text-[45px] md:text-[50px] lg:text-[60px] xl:text-[80px] font-black leading-[93%] md:text-start text-center uppercase max-w-[905px] w-full">
                WE ARE ALWAYS ON THE LOOKOUT FOR NEW PROBLEMS TO SOLVE.
              </p>
              <p className="text-white font-Montserrat text-[17px] md:text-[20px] md:text-start text-center font-medium leading-[130%] max-w-[728px] w-full">
                We have hands on experience with a broad range of sectors and
                industries - is yours next?We work closely with your business to
                ensure that we can deliver you results quickly and confidently,
                every time.
              </p>
            </div>

            <div className="flex gap-7 pt-[64px] lg:flex-row flex-col">
              <p className="text-white font-Montserrat text-[20px] md:text-[32px] md:text-start text-center font-bold leading-[93%] uppercase">
                want to know more?
              </p>
              <div className="max-w-[396px] w-full bg-[#F9DD00] flex justify-center items-center rounded-[12px] p-[10px]">
                <p className="text-[#003465] font-Montserrat text-center text-[14px] md:text-[16px] font-bold leading-[93%]">
                  Give us a call today on 0208 058 8852
                </p>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/images/png/man-mic.png"
              width={375}
              height={762}
              alt="man-mic"
              className="lg:[375px] lg:h-[680px] md:[300px] md:[700px] "
            />
          </div>
        </div>
      </div>
      {/* We are always on section end */}
      <Footer />
    </div>
  );
};

export default About;
