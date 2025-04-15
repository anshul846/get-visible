"use client";
import Image from "next/image";
import React from "react";

const Visible = () => {
  return (
    <section className="pb-[243px] max-lg:pb-[180px] max-md:pb-[120px] max-[425px]:pb-[60px]">
      <div>
        <Image
          width={1920}
          height={431}
          src="/assets/images/visibal.png"
          alt=" letters"
        />
      </div>
    </section>
  );
};

export default Visible;
