import React from "react";
import About1md from "./About1md"
import Img1 from "../../Image/About/deviceYaghi.webp"
function About1() {
  return (
    <>
      <div className="w-[100%] hidden md:flex flex-row lg:p-4 justify-center text-white mt-6">
        <div className="w-[40%] flex items-center justify-center ">
          <img
            src={Img1}
            className="w-[100%] block"
            alt=""
          />
        </div>
        <div className="w-[45%]">
        <h1 className="text-xl font-bold ">تماشای فیلیمو با همه دستگاه‌ها</h1>
        <p className="text-[#CECECE] mt-4">
          می‌توانید فیلیمو را به صورت هم‌زمان روی 3 دستگاه مختلف مثل موبایل،
          تبلت، لپ‌تاپ، تلویزیون و... تماشا کنید.
        </p>
        <h1 className="mt-5 text-xl font-bold">
          <span className="bi bi-pc-display-horizontal text-[#595959] me-3"></span>
          کامپیوتر و لپ‌تاپ
        </h1>
        <p className="text-[#919191] mt-3">windows PC - MacOS - Chorom OS</p>
        <h1 className="mt-5 text-xl font-bold"><span className="bi bi-phone text-[#595959] me-3 text-2xl"></span>موبایل و تبلت</h1>
        <p className="text-[#919191] mt-3">Android Phone & Tablets - Iphone and Ipad - Amazon Fire Tablets</p>
        <h1 className="mt-5 text-xl font-bold"><span className="bi bi-controller text-[#595959] me-3 text-2xl"></span>کنسول‌های بازی (Browser)</h1>
        <p className="text-[#919191] mt-3">Xbox Series S - Xbox Seris X - PS5 - PS4</p>
        <button className="w-[37%] lg:w-[22%] text-white px-1 text-center  py-2 rounded-lg font-bold text-[12px] bg-[#1CB561] mt-7 mb-5 hover:opacity-[0.9]"><span className="bi bi-currency-dollar"></span> خرید اشتراک و تماشا</button>
        </div>
      </div>
      <About1md/>
    </>
  );
}

export default About1;
