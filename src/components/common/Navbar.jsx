import React from "react";

const Navbar = () => {
  return (
    <nav className="max-w-[1920px] w-full bg-[#003465] px-4">
      {/* <!-- front navbar will start from here --> */}

      <navbar className="max-w-[1492px] w-full flex justify-between mx-auto h-[93px] items-center max-sm:items-start">
        <span className="h-[143px] pt-[15px] cursor-pointer max-sm:mt-[-21px]">
          <svg
            className="w-[160px] h-[201] max-xl:w-[100px] max-xl:h-[130px] max-sm:w-[80px] max-sm:h-[100px] max-[425px]:w-[60px] max-[425px]:h-[80px] max-[320px]:w-[56px] max-[320px]:h-[65px]"
            viewBox="0 0 160 201"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.9463 73.7289L0 29.7724V-17H47.9081V29.7724L23.9463 73.7289ZM4.73645 28.5656L23.9618 63.8267L43.1716 28.5656V-12.281H4.73645V28.5656Z"
              fill="white"
            />
            <path
              d="M23.9463 68.6697L15.8555 53.8164H32.0526L23.9463 68.6697Z"
              fill="white"
            />
            <path
              d="M46.1368 26.8174H1.75391V31.5364H46.1368V26.8174Z"
              fill="white"
            />
            <path
              d="M15.0626 -14.6484H10.3262V29.1688H15.0626V-14.6484Z"
              fill="white"
            />
            <path
              d="M37.5802 -14.6484H32.8438V29.1688H37.5802V-14.6484Z"
              fill="white"
            />
            <path
              d="M159.412 109.42C158.557 98.7119 149.074 92.0763 138.47 90.3528C98.1044 83.7914 24 74 24 74C24 74 48.4525 144.864 62.9253 183.025C66.7011 192.98 74.8327 201.085 85.422 199.971C98.1663 198.63 117.047 191.577 137.424 166.602C157.221 142.34 160.445 122.366 159.412 109.42Z"
              fill="#F9DD00"
            />
            <path
              d="M107.207 161.534H124.825V166.763H114.1V169.318H123.845V174.547H114.1V177.132H125.092V182.361H107.207V161.534Z"
              fill="#003465"
            />
            <path
              d="M86.7812 161.534H93.674V176.627H102.349V182.361H86.7812V161.534Z"
              fill="#003465"
            />
            <path
              d="M69.549 161.534C74.57 161.534 77.8084 163.614 77.8084 166.793C77.8084 168.843 76.4417 170.596 74.3026 171.249C76.7982 171.814 78.4323 173.894 78.4323 176.508C78.4323 180.073 75.1345 182.361 70.0541 182.361H59.002V161.534H69.549ZM69.1628 169.556C70.1135 169.556 70.7374 168.962 70.7374 168.041C70.7374 167.149 70.1135 166.585 69.1628 166.585H65.865V169.556H69.1628ZM69.1628 177.31C70.4403 177.31 71.2722 176.657 71.2722 175.646C71.2722 174.725 70.4403 174.131 69.1628 174.131H65.865V177.31H69.1628Z"
              fill="#003465"
            />
            <path
              d="M118.414 136.615H125.307V157.442H118.414V136.615Z"
              fill="#003465"
            />
            <path
              d="M111.312 144.013C109.203 142.855 105.965 141.577 104.152 141.577C103.38 141.577 102.875 141.815 102.875 142.439C102.875 145.053 113.659 143.419 113.659 150.965C113.659 155.6 109.589 157.65 104.895 157.65C101.27 157.65 97.2298 156.432 94.4668 154.323L97.0219 149.153C99.161 150.936 102.845 152.391 104.954 152.391C105.965 152.391 106.618 152.065 106.618 151.322C106.618 148.618 95.8335 150.401 95.8335 143.092C95.8335 138.933 99.3392 136.318 104.746 136.318C108.044 136.318 111.461 137.299 113.808 138.784L111.312 144.013Z"
              fill="#003465"
            />
            <path
              d="M82.8789 136.615H89.7716V157.442H82.8789V136.615Z"
              fill="#003465"
            />
            <path
              d="M55.5859 136.615H62.954L67.262 150.282L71.5402 136.615H78.5815L70.6192 157.442H63.4888L55.5859 136.615Z"
              fill="#003465"
            />
            <path
              d="M111.402 111.696H130.149V117.133H124.207V132.523H117.315V117.133H111.402V111.696Z"
              fill="#003465"
            />
            <path
              d="M85.6895 111.696H103.307V116.925H92.5822V119.48H102.327V124.709H92.5822V127.294H103.575V132.523H85.6895V111.696Z"
              fill="#003465"
            />
            <path
              d="M70.6782 126.404V121.561H76.5904V130.147C74.2731 131.692 70.4405 132.821 67.4695 132.821C60.9333 132.821 56.1797 128.305 56.1797 122.125C56.1797 115.975 61.1115 111.489 67.9151 111.489C71.1535 111.489 74.689 112.737 76.9172 114.698L73.0252 119.422C71.6289 118.085 69.6086 117.223 67.8854 117.223C65.2115 117.223 63.2507 119.303 63.2507 122.125C63.2507 125.007 65.2412 127.087 67.9448 127.087C68.6579 127.087 69.668 126.82 70.6782 126.404Z"
              fill="#003465"
            />
            <path
              d="M112.223 86.7773H130.97V92.2143H125.028V107.604H118.135V92.2143H112.223V86.7773Z"
              fill="#003465"
            />
            <path
              d="M110.318 94.1754C108.209 93.0167 104.97 91.7391 103.158 91.7391C102.386 91.7391 101.881 91.9768 101.881 92.6007C101.881 95.2152 112.665 93.5812 112.665 101.127C112.665 105.762 108.595 107.812 103.901 107.812C100.276 107.812 96.2357 106.594 93.4727 104.485L96.0277 99.3152C98.1668 101.098 101.851 102.554 103.96 102.554C104.97 102.554 105.624 102.227 105.624 101.484C105.624 98.7804 94.8393 100.563 94.8393 93.2543C94.8393 89.0949 98.3451 86.4805 103.752 86.4805C107.05 86.4805 110.467 87.4609 112.814 88.9464L110.318 94.1754Z"
              fill="#003465"
            />
            <path
              d="M79.838 98.7802C79.838 100.83 81.3235 102.167 83.0467 102.167C84.7402 102.167 86.0474 100.86 86.0474 98.7802V86.7773H92.9401V98.7802C92.9401 104.306 89.0481 107.901 83.017 107.901C76.9562 107.901 72.9453 104.306 72.9453 98.7802V86.7773H79.838V98.7802Z"
              fill="#003465"
            />
            <path
              d="M71.4503 100.563C71.4503 105.227 68.3902 107.901 63.6069 107.901C60.2497 107.901 57.6055 106.594 55.4961 104.277L58.6156 99.82C60.2497 101.454 61.9134 102.167 62.9533 102.167C63.904 102.167 64.5279 101.603 64.5279 100.414V92.2143H57.457V86.7773H71.4503V100.563Z"
              fill="#003465"
            />
          </svg>
        </span>
        <div className="text-white flex gap-[46px] text-base font-bold leading-[93px] max-xl:hidden">
          <span className="hover:font-black h-fit w-[66px]">
            <a href="#">Agency</a>
          </span>
          <span className="hover:font-black h-fit w-[131px]">
            <a href="#">Featured Work</a>
          </span>
          <span className="hover:font-black h-fit w-[106px]">
            <a href="#">Web Design</a>
          </span>
          <span className="hover:font-black h-fit w-[109px]">
            <a href="#">RE-Branding</a>
          </span>
          <span className="hover:font-black h-fit w-[78px]">
            <a href="#">Products</a>
          </span>
          <span className="hover:font-black h-fit w-[96px]">
            <a href="#">Contact Us</a>
          </span>
          {/* <!-- btn will start from here --> */}
          <button className="group bg-[#F9DD00] flex h-[50px] justify-center items-center gap-[10px] rounded-xl w-[215px] self-center transition-all cursor-pointer text-[#003465] text-center text-base font-bold leading-[93px] relative z-10 hover:bg-[#003465] hover:text-[#F9DD00] hover:outline-double">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="fill-[#003465] transition-all group-hover:fill-[#F9DD00]"
                d="M3.5246 14.3635C3.76605 14.364 4.00927 14.3223 4.22867 14.2038C6.98506 12.73 14.8535 7.61133 14.8535 7.61133C14.8535 7.61133 7.02671 2.48499 4.28183 1.01008C4.06326 0.892506 3.81951 0.850651 3.57806 0.850146C1.77628 0.848604 0.303769 3.87402 0.289958 7.60514C0.276147 11.3363 1.72399 14.3634 3.5246 14.3635Z"
              />
            </svg>
            Start Project
          </button>
        </div>
        <svg
          id="touch"
          className="hidden cursor-pointer max-xl:flex max-xl:w-9 h-9 rotate-90 max-sm:h-[18px] max-sm:mt-2 size-[35px]"
          xmlns="http://www.w3.org/2000/svg"
          fill="#003465"
          viewBox="0 0 24 24"
          stroke-width="2.5"
          stroke="#F9DD00"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
          />
        </svg>
      </navbar>

      {/* <!-- sidebar will start from here --> */}
      <article
        id="sidebar"
        className="fixed top-0 bg-[#003465] max-w-[800px] w-full h-[100vh] outline outline-[#F9DD00] left-[-105%] duration-300 overflow-auto"
      >
        <span className="pt-9 pl-9">
          <svg
            id="back"
            className="cursor-pointer max-xl:flex w-9 h-9 rotate-90 max-[320px]:h-[24px] max-[320px]:w-[24px] size-[35px]"
            xmlns="http://www.w3.org/2000/svg"
            fill="#003465"
            viewBox="0 0 24 24"
            stroke-width="2.5"
            stroke="#F9DD00"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
            />
          </svg>
        </span>

        <div className="text-white flex flex-col gap-[46px] text-2xl font-bold leading-[93px] items-center px-3 max-xl:gap-0 max-xl:leading-[70px] max-[320px]:leading-[55px] max-[320px]:text-[16px]">
          <span className="hover:font-black h-fit">
            <a href="#">Agency</a>
          </span>
          <span className="hover:font-black h-fit">
            <a href="#">Featured Work</a>
          </span>
          <span className="hover:font-black h-fit">
            <a href="#">Web Design</a>
          </span>
          <span className="hover:font-black h-fit">
            <a href="#">RE-Branding</a>
          </span>
          <span className="hover:font-black h-fit">
            <a href="#">Products</a>
          </span>
          <span className="hover:font-black h-fit">
            <a href="#">Contact Us</a>
          </span>
          {/* <!-- btn will start from here --> */}
          <button className="group bg-[#F9DD00] flex h-[50px] justify-center items-center gap-[10px] rounded-xl w-full self-center transition-all cursor-pointer text-[#003465] text-center text-xl font-bold leading-[93px] relative z-10 hover:bg-[#003465] hover:text-[#F9DD00] hover:outline-double max-[320px]:h-[40px] max-[320px]:text-[17px]">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="fill-[#003465] transition-all group-hover:fill-[#F9DD00]"
                d="M3.5246 14.3635C3.76605 14.364 4.00927 14.3223 4.22867 14.2038C6.98506 12.73 14.8535 7.61133 14.8535 7.61133C14.8535 7.61133 7.02671 2.48499 4.28183 1.01008C4.06326 0.892506 3.81951 0.850651 3.57806 0.850146C1.77628 0.848604 0.303769 3.87402 0.289958 7.60514C0.276147 11.3363 1.72399 14.3634 3.5246 14.3635Z"
              />
            </svg>
            Start Project
          </button>
        </div>
      </article>
    </nav>
  );
};

export default Navbar;
