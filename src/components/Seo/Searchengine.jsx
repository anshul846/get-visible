import React from "react";

const Searchengine = () => {
  return (
    // <div className="bg-[#003465] ">
    //   <div className="max-w-[1499px] w-full mx-auto ">
    //     {/* Left Side */}
    //     <div className="grid md:grid-cols-2 gap-52 justify-start pt-[175px]">
    //       <h1 className="text-[213px] text-[#03498A] font-black leading-[74%]">
    //         SEARCH ENGINE OPTIMISATION
    //       </h1>
    //       {/* Right Side */}
    //       <div className="flex flex-col justify-start space-y-6">
    //         <h2 className="text-[40px] font-black leading-[130%] font-Montserrat max-w-[633px] text-white w-full">
    //           AIMED AT GETTING LARGE VOLUME AND QUALITY TRAFFIC TO YOUR SITE.
    //         </h2>
    //         <p className="max-w-[528px] w-full leading-[130%] font-Montserrat text-[24px] font-bold text-white">
    //           If you’re not optimising for your Google positions, you’re simply
    //           not competing.
    //         </p>
    //         <div></div>
    //       </div>
    //     </div>
    //     <div className="flex gap-4 pt-[50px]">
    //       <p className="max-w-[854px] w-full text-white font-montserrat text-[40px] font-black leading-[130%] uppercase">
    //         WE WORK WITH OUR CLIENTS TO UNDERSTAND THEIR BUSINESS TODAY, AND
    //         WHERE THEY WANT TO POSITION THEMSELVES IN THE FUTURE.
    //       </p>
    //       <p className="max-w-[551px] w-full text-white font-montserrat text-[24px] font-bold leading-[154%]">
    //         We assess who their current competitors are and competitors of the
    //         future. Only then are we able to provide a transparent, long-term
    //         and measurable campaign strategy.
    //       </p>
    //     </div>
    //   </div>
    // </div>
    <div className="bg-[#003465] px-4 sm:px-6 lg:px-8">
  <div className="max-w-[1499px] w-full mx-auto">
   
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 pt-20 md:pt-[175px]">
      <h1 className="text-[40px] sm:text-[80px] md:text-[140px] lg:text-[180px] xl:text-[200px] text-[#03498A] font-black leading-[0.74]">
        SEARCH ENGINE OPTIMISATION
      </h1>

    
      <div className="flex flex-col justify-start space-y-4  md:space-y-6">
        <h2 className="text-[20px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-black leading-[130%] font-montserrat text-white max-w-[633px] pl-2 w-full">
          AIMED AT GETTING LARGE VOLUME AND QUALITY TRAFFIC TO YOUR SITE.
        </h2>
        <p className="text-[16px] sm:text-[20px] md:text-[22px] lg:text-[24px] leading-[130%] font-bold font-montserrat text-white max-w-[528px] w-full">
          If you’re not optimising for your Google positions, you’re simply not competing.
        </p>
        <div></div>
      </div>
    </div>

    <div className="flex flex-col lg:flex-row gap-6 md:gap-10 pt-10 md:pt-[50px]">
      <p className="text-[20px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-black leading-[130%] text-white font-montserrat uppercase max-w-[854px] w-full">
        WE WORK WITH OUR CLIENTS TO UNDERSTAND THEIR BUSINESS TODAY, AND WHERE THEY WANT TO POSITION THEMSELVES IN THE FUTURE.
      </p>
      <p className="text-[16px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-bold leading-[154%] text-white font-montserrat max-w-[551px] w-full">
        We assess who their current competitors are and competitors of the future. Only then are we able to provide a transparent, long-term and measurable campaign strategy.
      </p>
    </div>
  </div>
</div>

  );
};

export default Searchengine;
