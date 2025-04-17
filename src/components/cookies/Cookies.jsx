import React from "react";
import { text } from "../common/Helper";
const Cookies = () => {  
  return (
    <div className="bg-[#003465] w-full h-full px-4">
      <div className="max-w-[1636px] mx-auto flex flex-col items-center gap-5 text-center pt-20 pb-10">
        <h1 className="text-[#03498A] text-center text-[192px] tracking-[-15px] font-black font-Montserrat w-full pt-20">
          COOKIES POLICY
        </h1> 
        <div className=" max-w-[1536px] w-full mx-auto gap-y-[100px] flex flex-col justify-between ">
          {text.map((items, index) => (
            <div 
              key={index}
              className=" flex flex-col md:flex-row items-start text-center  pt-10 justify-between gap-5"
            >
              <p className="text-white w-full max-w-[537px] font-Montserrat  text-2xl font-black uppercase text-start">
                {items.title}
              </p>
              <div>
                <p className="text-white w-full max-w-[783px] font-Montserrat text-md  leading-[28px] text-start ">
                  {items.description}
                </p>
                {items.list && (
                  <ul className="text-white w-full max-w-[783px] font-Montserrat text-md  leading-[28px] text-start flex-col gap-2 flex ">
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
