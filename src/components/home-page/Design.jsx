"use client";
import React from "react";
import { designpageleftCards, designpagerightCards } from "../common/Helper";

const Card = ({
  title,
  image,
  text,
  imgClassName = "",
  cardClassName = "",
  contentClassName = "",
}) => (
  <div className={`flex flex-col gap-4 ${cardClassName}`}>
    <span className="text-[#003465] break-words max-w-[530px] w-full text-[80px] font-black leading-[74px] uppercase max-2xl:text-[72px] max-[1440px]:text-[62px] max-xl:text-[58px] max-md:text-[33px] max-sm:text-[27px] max-[320px]:leading-[20px] max-[320px]:text-[20px]">
      {title}
    </span>
    <div className="flex gap-[51px] max-[425px]:gap-[20px] max-[425px]:flex-col items-center">
      <span>
        <img className={`w-full ${imgClassName}`} src={image} alt={title} />
      </span>
      <div
        className={`flex justify-between text-[17px] font-semibold leading-[27px] flex-col w-full ${contentClassName}`}
      >
        {text}
        <span className="group w-[68px] h-[68px] cursor-pointer hover:bg-[#003465] bg-[#F9DD00] rounded-[50%] p-[10px] flex justify-center items-center max-lg:w-[50px] max-lg:h-[50px] max-md:w-[35px] max-md:h-[35px]">
          <svg
            className="max-lg:w-[20px]"
            width="26"
            height="20"
            viewBox="0 0 26 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="fill-[#000] transition-all group-hover:fill-[#F9DD00]"
              d="M15.4393 3.06066C14.8536 2.47487 14.8536 1.52513 15.4393 0.93934C16.0251 0.353553 16.9749 0.353553 17.5607 0.93934L25.5607 8.93934C26.1465 9.52512 26.1465 10.4749 25.5607 11.0607L17.5607 19.0607C16.9749 19.6464 16.0251 19.6464 15.4393 19.0607C14.8536 18.4749 14.8536 17.5251 15.4393 16.9393L20.8787 11.5H1.5C0.671574 11.5 0 10.8284 0 10C0 9.17157 0.671574 8.5 1.5 8.5H20.8787L15.4393 3.06066Z"
            />
          </svg>
        </span>
      </div>
    </div>
  </div>
);

const Design = () => {
  return (
    <section className="max-w-[1920px] w-full">
      <div className="max-w-[1511px] w-full mx-auto pt-[167px] pb-[127px] flex gap-[100px] justify-between px-4 max-xl:flex-col max-xl:items-center max-xl:pt-[100px] max-md:pt-[50px] max-sm:pb-0">
        {/* Left Part */}
        <div className="flex flex-col gap-[210px] w-1/2 max-xl:w-full max-xl:items-center max-xl:gap-[100px] max-[320px]:gap-5">
          {designpageleftCards.map((card, i) => (
            <Card
              key={i}
              {...card}
              imgClassName={
                i === 0
                  ? "max-w-[255px] h-[283px] max-md:h-[200px] max-[425px]:h-[150px]"
                  : "max-w-[340px] h-[290px] max-md:h-[225px] max-[320px]:h-[150px]"
              }
              contentClassName={`${
                i === 0 ? "max-w-[355px]" : "max-w-[312px]"
              } ${
                i === 1
                  ? "ml-[-53px] pt-[35px] max-md:ml-[0px] max-md:pt-[0px]"
                  : ""
              } max-md:text-[15px] max-md:leading-[25px] max-[425px]:text-[10px] max-[425px]:leading-[20px]`}
            />
          ))}
        </div>

        {/* Right Part */}
        <div className="flex flex-col pt-[240px] gap-[261px] w-1/2 max-xl:w-full max-xl:items-center max-xl:pt-[100px] max-xl:gap-[100px] max-[320px]:pt-[50px] max-[320px]:gap-[50px]">
          {designpagerightCards.map((card, i) => (
            <Card
              key={i}
              {...card}
              imgClassName={
                i === 0
                  ? "max-w-[304px] h-[283px] max-md:h-[200px] max-[320px]:h-[150px]"
                  : "max-md:h-[200px] max-[320px]:h-[150px]"
              }
              contentClassName={`${
                i === 0 ? "max-w-[296px]" : "max-w-[322px]"
              } ${
                i === 1 ? "ml-[-35px] max-md:ml-[0px]" : ""
              } max-md:text-[15px] max-md:leading-[25px] max-[425px]:text-[10px] max-[425px]:leading-[20px]`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Design;
