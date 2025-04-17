"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  HomePageLogo,
  NavbarBtnIcon,
  SidebarOpenIcon,
  SiderbarCloseIcon,
} from "../homePage/Icon";
import { navLinks, NavLinks } from "./Helper";
import Link from "next/link";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null); // 🔥 Ref for sidebar

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  // Auto-close sidebar if screen is resized above xl (1280px)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Disable body scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "auto";
  }, [isSidebarOpen]);

  // Detect click outside of sidebar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };

    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <nav className="w-full bg-[#003465]">
      <div className="max-w-[1920px] w-full px-4 relative">
        {/* Top Navbar */}
        <div className="max-w-[1492px] w-full flex justify-between mx-auto h-[93px] items-center max-sm:items-start">
          <span className="h-[143px] pt-[15px] cursor-pointer max-sm:mt-[-21px]">
            <HomePageLogo />
          </span>

          {/* Desktop NavLinks */}
          <div className="text-white flex gap-[46px] text-base font-bold leading-[93px] max-xl:hidden">
            {navLinks.map((link, index) => (
              <span
                key={index}
                className="hover:font-black h-fit"
                style={{ width: "max-content" }}
              >
                <Link href={link.href}>{link.label}</Link>
              </span>
            ))}
            <button className="group bg-[#F9DD00] flex h-[50px] justify-center items-center gap-[10px] rounded-xl w-[215px] self-center transition-all cursor-pointer text-[#003465] text-center text-base font-bold leading-[93px] relative z-10 hover:bg-[#003465] hover:text-[#F9DD00] hover:outline-double">
              <NavbarBtnIcon />
              Start Project
            </button>
          </div>

          {/* Mobile Toggle Button */}
          <div className="xl:hidden" onClick={toggleSidebar}>
            <SidebarOpenIcon />
          </div>
        </div>

        {/* Sidebar (Mobile Only) with animation */}
        <div
          ref={sidebarRef}
          id="sidebar"
          className={`fixed top-0 bg-[#003465] max-w-[800px] w-full h-screen outline outline-[#F9DD00] z-50 overflow-auto transition-all duration-500 ease-in-out xl:hidden ${
            isSidebarOpen ? "left-0" : "-left-[100%]"
          }`}
        >
          {/* Close Button */}
          <span className="pt-9 pl-9" onClick={closeSidebar}>
            <SiderbarCloseIcon />
          </span>

          {/* Sidebar Links */}
          <div className="text-white flex flex-col gap-[46px] text-2xl font-bold leading-[93px] items-center px-3 max-xl:gap-0 max-xl:leading-[70px] max-[320px]:leading-[55px] max-[320px]:text-[16px]">
            {navLinks.map((link, index) => (
              <span
                key={index}
                className="hover:font-black h-fit"
                onClick={closeSidebar}
              >
                <Link href={link.href}>{link.label}</Link>
              </span>
            ))}

            <button
              onClick={closeSidebar}
              className="group bg-[#F9DD00] flex h-[50px] justify-center items-center gap-[10px] rounded-xl w-full self-center transition-all cursor-pointer text-[#003465] text-center text-xl font-bold leading-[93px] relative z-10 hover:bg-[#003465] hover:text-[#F9DD00] hover:outline-double max-[320px]:h-[40px] max-[320px]:text-[17px]"
            >
              <NavbarBtnIcon />
              Start Project
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
