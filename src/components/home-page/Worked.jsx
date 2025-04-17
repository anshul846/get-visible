import React from "react";

const Worked = () => {
  return (
    <section className="max-w-[1220px] w-full mx-auto px-4 pt-[114px] pb-[200px] max-md:pb-[100px] max-[320px]:pb-0">
      <article className="flex flex-col gap-[96px] max-[425px]:pt-[70px] max-[320px]:gap-[50px] max-[320px]:pb-[100px]">
        <span className="text-[#003465] text-center text-[80px] font-black leading-[74px] uppercase max-[1440px]:text-[65px] max-xl:text-[45px] max-lg:text-[40px] max-md:text-[30px] max-[425px]:text-[26px] max-[425px]:leading-[35px]">
          people we have worked with
        </span>
        <div className="flex flex-col gap-[60px]">
          <div className="flex gap-[57px] max-[425px]:gap-[20px]">
            <span>
              <a href="#">
                <img src="./assets/img/image 6.png" alt="img6" />
              </a>
            </span>
            <span>
              <a href="#">
                <img src="./assets/img/image 15.png" alt="img15" />
              </a>
            </span>
            <span>
              <a href="#">
                <img src="./assets/img/image 8 (3).png" alt="img8" />
              </a>
            </span>
            <span>
              <a href="#">
                <img src="./assets/img/image 13.png" alt="img13" />
              </a>
            </span>
          </div>
          <div className="flex gap-24 items-center max-[425px]:gap-[30px]">
            <span>
              <a href="#">
                <img src="./assets/img/image 9 (1).png" alt="img9" />
              </a>
            </span>
            <span>
              <a href="#">
                <img src="./assets/img/image 12.png" alt="img12" />
              </a>
            </span>
            <span>
              <a href="#">
                <img src="./assets/img/image 11.png" alt="img11" />
              </a>
            </span>
            <span>
              <a href="#">
                <img src="./assets/img/image 14.png" alt="img14" />
              </a>
            </span>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Worked;
