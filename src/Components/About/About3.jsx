import React from 'react'
import Img1 from "../../Image/About/bg-kids.png"
import "./About3.css"
function About3() {
  return (
    <>
    <div className='w-[100%] gradient-bg flex flex-col-reverse md:flex-row justify-center mt-16'>
        <div className='w-[100%] md:w-[50%] flex justify-end pt-10'>
            <img src={Img1} className='block w-[90%] md:w-[55%] mx-auto md:mx-0 md:me-16' alt="" />
        </div>
        <div className='w-[100%] md:w-[50%] flex items-center mt-10 md:mt-0'>
            <div className='text-white w-[100%] md:w-[60%]'>
            <h1 className='text-2xl mb-5'>دنیایی متنوع از فیلم و کارتون‌های کودکانه</h1>
            <p className='text-sm text-[#858585]'>ساخت فیلیمو کودک این امکان را می‌دهد که با انتخاب سن فرزندتان، یک فضای امن برای تماشای کودک بسازید؛ یعنی محتوای مخصوص سن خودش را ببیند و به بقیه فیلم و سریال‌ها دسترسی نداشته‌باشد.</p>
            <div className='mt-7 w-[100%] md:w-[70%] flex'>
            <button className='w-20% bg-[#EDEDED] py-2 font-bold px-4 rounded-lg text-black text-sm me-3'>فیلیمو کودک بساز</button>
            <button className='w-20% bg-[#EDEDED] py-2 font-bold px-4 rounded-lg text-black text-sm'>تماشای فیلیمو کودک</button>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default About3