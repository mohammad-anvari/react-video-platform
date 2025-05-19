import React from 'react'
import { useNavigate } from 'react-router-dom'

function Footer() {
  const navigate=useNavigate();
  const pagesub=()=>{
    navigate('/subscription')
  }
  return (
    <>
    <div className='w-[100%] bg-[#0D1912]'>
        <div className='mx-auto text-center w-[100%] pt-14'>
        <h1 className='text-white text-[70px]'>فیلیمو</h1>
        </div>
        <div className='flex flex-col md:flex-row justify-around text-center w-[70%] mx-auto mt-7'>
        <p className='text-[#C1C4C2]'>
              <span className="bi bi-check-circle-fill text-green-700 me-1"></span>
              90 هزار اپیزود فیلم و سریال برای تماشا داری
            </p>
            <p className='text-[#C1C4C2] my-2 md:my-0'>
              <span className="bi bi-check-circle-fill text-green-700 me-1"></span>
              می‌تونی دانلود کنی بعد بدون اینترنت تماشا کنی
            </p>
            <p className='text-[#C1C4C2]'>
              <span className="bi bi-check-circle-fill text-green-700 me-1"></span>
              می‌تونی یک عضو، مخصوص تماشای کودک بسازی
            </p>
        </div>
        <div className='w-[100%] flex justify-center mt-4 pb-5'>
        <button className="w-[60%] lg:w-[18%] text-white px-1 text-center  py-3 rounded-lg  text-[20px] bg-[#1CB561] mt-7 mb-5 hover:opacity-[0.9]" onClick={pagesub}><span className="bi bi-currency-dollar"></span> خرید اشتراک و تماشا</button>
        </div>
            </div>
    </>
  )
}

export default Footer