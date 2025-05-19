import React from 'react'
import Serial5 from '../SwiperSlide/serial5'
function Zodiak({sc}) {
  return (
    <>
        <div className='px-12 mt-10 bg-[url("../../Image/zodiak/bg.jpg")] bg-cover py-10' ref={sc}>
        <h1 className='mb-9 text-2xl'><a href="#">شب های مافیا : زودیاک</a></h1>
        <p className='text-[#949494] text-sm mb-4'>کارگردان: محمدرضا رضائیان</p>
        <div className='mb-5'>
        <span className='rounded-full w-[10%] bg-[#282828] me-2 px-4 pb-1 text-sm'>خانوادگی</span>
        <span className='rounded-full w-[10%] bg-[#282828] px-4 pb-1 text-sm'>ریلیتی شو

</span> 
        </div>
        <p className='mb-4'>«شب های مافیا»، گیم شوی جذابی است که در آن یک قاتل سریالی به نام «زودیاک»، شهروندان و مافیای سیسیل را هدف قرار می د...</p>
        <div className='my-10'>
          <Serial5/>
        </div>
    </div>
    </>
  )
}

export default Zodiak