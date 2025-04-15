"use client";
import React from "react";
import Image from "next/image";

import { contactInfo, footerNavLinks, socialLinks } from "./Helper";

const Footer = () => {
  return (
    <footer className="px-4">
      <section className="flex items-center justify-between max-w-[1726px] w-full mx-auto max-[992px]:flex-col max-[992px]:gap-[50px]">
        <article className="flex justify-center">
          <Image
            width={380}
            height={324}
            src="/assets/images/footer-get-visibal.png"
            className="w-[380px] max-[320px]:w-[200px]"
            alt="image"
          />
        </article>

        <article className="max-w-[1326px] w-full flex flex-col justify-center pr-4">
          <div className="bg-[white] max-w-[1326px] w-full flex flex-wrap gap-[100px] text-[#003465] text-[16px] font-bold leading-[93%] cursor-pointer max-2xl:justify-center max-2xl:gap-[50px]">
            <div className="flex justify-between gap-6 max-w-[694px] w-full max-[640px]:flex-col items-center">
              {footerNavLinks.map((item, idx) => (
                <a key={idx} href={item.href} className="hover:font-black">
                  {item.label}
                </a>
              ))}
            </div>

            <div className="flex gap-[20px] max-[425px]:flex-col">
              {contactInfo.map((info, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-[16px] cursor-pointer"
                >
                  <a href={info.href}>{info.icon}</a>
                  <a
                    className={`text-[16px] font-bold text-[#003465] leading-[93%] ${
                      info.underline ? "underline" : ""
                    }`}
                    href={info.href}
                  >
                    {info.label}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-[198px] mt-[98px] max-w-[1326px] pb-[90px] max-2xl:justify-center max-2xl:gap-[30px] max-2xl:mt-[50px] max-[425px]:mt-[10px]">
            <div>
              <a className="text-[#003465] text-[14px] leading-[93%]" href="#">
                © 2024 Just Get Visible Ltd, Company Registered in England &
                Wales: 09882516
              </a>
            </div>
            <div className="flex items-end gap-[32px] pl-2">
              <a
                className="text-[16px] font-bold text-[#003465] leading-[93%]"
                href="#"
              >
                Follow Us
              </a>
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  className={idx === 0 ? "ml-[14px]" : ""}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </article>
      </section>
    </footer>
  );
};

export default Footer;
