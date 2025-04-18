"use client";
import React from "react";
import { logosRow1, logosRow2 } from "../common/Helper";
import Link from "next/link";
import Image from "next/image";

const Worked = () => {
  return (
    <section className="max-w-[1220px] w-full mx-auto px-4 pt-[114px] pb-[200px] max-md:pb-[100px] max-[320px]:pb-0">
      <div className="flex flex-col gap-[96px] max-[425px]:pt-[70px] max-[320px]:gap-[50px] max-[320px]:pb-[100px]">
        <span className="text-[#003465] max-w-[941px] self-center text-center text-[80px] font-black leading-[74px] uppercase max-[1440px]:text-[65px] max-xl:text-[45px] max-lg:text-[40px] max-md:text-[30px] max-[425px]:text-[26px] max-[425px]:leading-[35px]">
          people we have worked with
        </span>

        <div className="flex flex-col gap-[60px]">
          {/* Row 1 */}
          <div className="flex gap-[57px] max-[425px]:gap-[20px] max-2xl:flex-wrap  justify-center">
            {logosRow1.map((logo, i) => (
              <span key={i}>
                <Link href="#">
                  <Image
                    width={250}
                    height={120}
                    src={logo.src}
                    alt={logo.alt}
                  />
                </Link>
              </span>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex gap-24 items-center max-[425px]:gap-[30px] flex-wrap justify-center">
            {logosRow2.map((logo, i) => (
              <span key={i}>
                <Link href="#">
                  <Image
                    width={225}
                    height={120}
                    src={logo.src}
                    alt={logo.alt}
                  />
                </Link>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Worked;
