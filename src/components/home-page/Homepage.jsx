import React from "react";
import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
import HeroSecton from "./HeroSecton";
import Design from "./Design";
import Visibal from "./Visibal";
import Worked from "./Worked";
import Proud from "./Proud";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      {/* <!-- section 1 will start from here --> */}
      <HeroSecton />

      {/* <!-- section 2 will start from here  --> */}
      <Design />

      {/* <!-- section 3 will start from here --> */}
      {/* <Proud /> */}
      {/* <!-- section 4 will start from here  --> */}
      <Worked />
      {/* <!-- section 6 will start from here --> */}
      <Visibal />
      {/* <!-- footer will start from here --> */}
      <Footer />
    </div>
  );
};

export default Homepage;
