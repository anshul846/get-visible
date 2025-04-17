import Image from "next/image";
import React from "react";

const Getfree = () => {
  return (
    <div className="bg-[#003465] text-white py-12 px-4 md:px-12">
      <div className="max-w-[1499px] w-full mx-auto">
        <h2 className="max-w-[905px] w-full font-Montserrat leading-[93%] mb-[40px] font-black text-[80px] text-bold">
          Get Your Free SEO Analysis Today jhk
        </h2>
        <p className="max-w-[731px] w-full text-white text-[32px] font-Montserrat font-bold leading-[130%]">
          Fill in the details and we’ll send your website’s SEO analysis
          absolutely FREE!
        </p>
        <form >
          <div className="flex gap-[20px] mt-[44px]">
            <div className="flex flex-col">
              <label>CONTACT NAME</label>
              <input
                type="text"
                className="w-[323px] mt-[10px] h-[56px] rounded-[12px] bg-[#fff]"
              />
            </div>
            <div className="flex flex-col">
              <label>EMAIL</label>
              <input
                type="text"
                className="w-[323px] mt-[10px] h-[56px] rounded-[12px] bg-[#fff]"
              />
            </div>
            <div className="flex flex-col">
              <label>WEBSITE URL</label>
              <input
                type="text"
                className="w-[323px] mt-[10px] h-[56px] rounded-[12px] bg-[#fff]"
              />
            </div>
          </div>
          <button className="max-w-[396px] w-full h-[63px] mt-[72px] font-bold text-[#003465] text-[16px] font-Montserrat bg-[#F9DD00] rounded-[12px]">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Getfree;
