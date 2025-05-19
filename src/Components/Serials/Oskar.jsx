import React from 'react'
import Serial3 from "../SwiperSlide/Serial3"
function Oskar({sc}) {
  return (
    <>
        <div className='px-12 mt-10 bg-[url("../../Image/oskar/bg.jpg")] bg-cover py-10' ref={sc}>
        <h1 className='mb-9 text-2xl'><a href="#">اسکار</a></h1>
        <p className='text-[#949494] text-sm mb-4'>کارگردان: مهران مدیری</p>
        <div className='mb-5'>
        <span className='rounded-full w-[10%] bg-[#282828] me-2 px-4 pb-1 text-sm'>ریلیتی شو</span>
        <span className='rounded-full w-[10%] bg-[#282828] px-4 pb-1 text-sm'>گیم شو
</span> 
        </div>
        <p className='mb-4'>در دومین قسمت از فصل ششم «اسکار»، بهرنگ علوی برای دریافت امتیاز از مهران مدیری با کمک جلوه‌های ویژه در مقابل «متیو مک‌...</p>
        <div className='my-10'>
          <Serial3/>
        </div>
    </div>
    </>
  )
}

export default Oskar