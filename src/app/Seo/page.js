import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Getfree from "@/components/getfree/Getfree";
import Digitalmarketing from "@/components/Seo/Digitalmarketing";

import Searchengine from "@/components/Seo/Searchengine";
import SeoSteps from "@/components/Seo/SeoSteps";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <Searchengine/>
     <Digitalmarketing/>
       {/* <Getfree/> */}
      <Footer />
      {/* <SeoSteps/> */}
    </div>
  );
};

export default page;
