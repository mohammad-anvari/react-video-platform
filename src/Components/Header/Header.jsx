
import React from "react";
import { useNavigate } from "react-router-dom";
import Img1 from "../../Image/Icon/fa-filimo-dark-logo(1).svg"
function Header() {
  const navigate=useNavigate();
  const changepage=()=>{
    navigate("/information")
  }
  const pagesub=()=>{
    navigate("/subscription");
  }
  return (
    <>
      <div className="w-[100%]">
        <div className="w-[100%] bg-black flex justify-between fixed z-[99]">
          <div className="flex w-[50%] md:w-[79%] lg:w-[40%] xl:w-[30%] md:ms-20 lg:ms-28 xl:ms-40">
            <ul className="flex w-[100%] md:justify-center lg:justify-evenly fs text-center">
              <li className="w-[80px] md:w-[25%] sm:ms-7 lg:w-[22%] xl:w-[28%] flex items-center justify-center">
                <a
                  href="#"
                  className="block w-[100%] md:border-l-[1px]  md:pe-16 lg:pe-4 md:border-l-[#505050]"
                >
                  <img
                    src={Img1}
                    className="w-[100%] block"
                    alt=""
                  />
                </a>
              </li>
              <li className="hidden md:inline-flex md:w-[25%] lg:w-[22%] xl:w-[30%] items-center text-white ms-5 justify-center">
                <a
                  href="#"
                  className="w-[100%] block hover:text-[#FAA63D] text-sm md:py-3"
                >
                    <span className="bi bi-fire me-1 text-[#FAA63D] inline-block"></span>
                  <p className="inline-block">
                    
                    فیلیموتور
                  </p>
                </a>
              </li>
              <li className="md:w-[25%] text-white items-center hidden md:inline-flex lg:w-[30%] xl:w-[48%] lg:mx-3 text-center justify-center">
                <a href="#" className="hover:text-[#FAA63D] block md:py-3">
                    <span className="i bi-house-fill me-1 text-center inline-block"></span>
                  <p className="inline-block">
                    فیلیمو مدرسه
                  </p>
                </a>
              </li>
              <li className="text-white md:w-[25%] lg:w-[22%] hidden md:inline-flex xl:w-[30%] items-center justify-center">
                <a href="#" className="hover:text-[#FAA63D] block md:py-3">
                    <span className="bi bi-search me-1 inline-block"></span>
                  <p className="inline-block">
                    جستجو
                  </p>
                </a>
              </li>
            </ul>
          </div>
          <div className="w-[50%] md:w-[21%] p-1 fs flex items-center md:justify-end lg:justify-start">
            <button className="inline-block md:hidden w-[10%] me-3"><span className="bi bi-search inline-block md:hidden text-white"></span></button>
        
        <button className="w-[50%] md:w-[55%] lg:w-[35%] bg-[#17924E] text-white  py-3 rounded-md hover:opacity-90 text-xs " onClick={pagesub} ><span className="bi bi-currency-dollar md:block hidden lg:inline-block"></span><p className="md:block lg:inline-block">خرید اشترک</p></button>
        <button className=" md:w-[40%] lg:w-[22%] text-center bg-[#373736] text-white  p-3 block ms-3 rounded-md hover:opacity-90 text-sm" onClick={changepage} ><p>ورود</p></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
