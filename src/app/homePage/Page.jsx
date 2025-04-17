import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Design from "@/components/homePage/Design";
import HeroSecton from "@/components/homePage/HeroSecton";
import Proud from "@/components/homePage/Proud";
import Visible from "@/components/homePage/Visible";
import Worked from "@/components/homePage/Worked";
import React from "react";

const Page = () => {
  return (
    <>
      <Navbar />
      <HeroSecton />
      <Design />
      <Proud />
      <Worked />
      <Visible />
      <Footer />
    </>
  );
};

export default Page;
