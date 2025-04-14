import Image from "next/image";
import React from "react";

const SeoSteps = () => {
  return (
    <div className="relative">
        <Image className="absolute top-[30%]" src="/image/map.png" alt="" width="1200" height="1200" />
      <div className="flex">
        <div className="flex flex-col gap-[115px]">
          <p>01</p>
          <p>STRATEGY & ANALYSIS COMPETITOR BENCHMARKING</p>
        </div>
        <div className="flex flex-col gap-[115px]">
          <p>STRATEGY & ANALYSIS COMPETITOR BENCHMARKING</p>
          <p>02</p>
        </div>
        <div className="flex flex-col gap-[115px]">
          <p>03</p>
          <p>STRATEGY & ANALYSIS COMPETITOR BENCHMARKING</p>
        </div>
        <div className="flex flex-col gap-[115px]">
          <p>STRATEGY & ANALYSIS COMPETITOR BENCHMARKING</p>
          <p>04</p>
        </div>
        <div className="flex flex-col gap-[115px]">
          <p>05</p>
          <p>STRATEGY & ANALYSIS COMPETITOR BENCHMARKING</p>
        </div>
      </div>
    </div>
  );
};

export default SeoSteps;
