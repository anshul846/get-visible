import React from "react";
import { text } from "../common/Helper";
const Cookies = () => {
  return (
    <div className="  bg-[#003465] h-full  w-full  px-1  bg-cover bg-center bg-no-repeat  ">
      <div className="max-w-[1636px] mx-auto flex flex-col items-center  text-center pt-[150px] max-xl:pt-[100px] max-md:pt-[60px] max-sm:pt-[20px]   pb-10">
        <div className="bg-[url('/assets/images/frame.png')] bg-cover bg-center w-full">
          <h1 className="text-[#03498A]  text-center   text-[10vw]  xl:tracking-[-18px] font-black font-Montserrat w-full  ">
            COOKIES POLICY
          </h1>
        </div>
        <div className="px-4 max-sm:justify-center mx-auto max-w-[1536px] w-full  md:gap-y-[100px] flex flex-col justify-between ">
          {text.map((items, index) => (
            <div
              key={index}
              className=" flex flex-col md:flex-row items-start text-center max-sm:pt-[9px] pt-10 justify-between  sm:gap-5 gap-4"
            >
              <p className="text-white  w-full max-w-[537px] font-Montserrat max-sm:text-[17px]  max-md:text-[25px] max-lg:text-[30px] text-[40px]   font-black uppercase text-start">
                {items.title}
              </p>
              <div>
                <p className="text-white w-full max-w-[783px] font-Montserrat sm:text-md  text-[16px]     leading-[28px] text-start ">
                  {items.description}
                </p>
                {items.list && (
                  <ul className="text-white w-full max-w-[783px] font-Montserrat text-md pl-4  leading-[28px] text-start flex-col gap-2 flex ">
                    {items.list.map((item, index) => (
                      <li key={index} className="list-disc">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Cookies;
