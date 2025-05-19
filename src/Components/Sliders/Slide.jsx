
import React from "react";
import { useNavigate } from "react-router-dom";

function Slide() {
  const navigate=useNavigate();
  const pagesub=()=>{
    navigate("/subscription");
  }
  return (
    <>
      <div className="w-[100%] flex justify-center absolute z-50 bottom-16">
        <div className="w-[70%] text-center select-none">
          <p className="text-[#F9A93D] font-bold ">
            با فیلیمو بی وقفه فیلم ببین
          </p>
          <h1 className="text-4xl text-white font-bold">
            کنترل همیشه دست توست!
          </h1>
          <div className="md:flex justify-evenly text-white mt-8">
            <p>
              <span className="bi bi-check-circle-fill text-green-700 me-1"></span>
              90 هزار اپیزود فیلم و سریال برای تماشا داری
            </p>
            <p>
              <span className="bi bi-check-circle-fill text-green-700 me-1"></span>
              می‌تونی دانلود کنی بعد بدون اینترنت تماشا کنی
            </p>
            <p>
              <span className="bi bi-check-circle-fill text-green-700 me-1"></span>
              می‌تونی یک عضو، مخصوص تماشای کودک بسازی
            </p>
          </div>
          <button className="w-[50%] px-1 md:px-0 md:w-[20%] bg-green-600 py-3 text-white font-bold text-sm rounded-lg hover:opacity-[0.8] mt-10" onClick={pagesub}><span className="bi bi-play-btn me-1"></span>خرید اشتراک و تماشا</button>
          <p className="text-gray-500 mt-2"><span className="bi bi-gift me-1"></span>تخفیف ویژه برای کاربران جدید</p>
        </div>
      </div>
    </>
  );
}

export default Slide;
