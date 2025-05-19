import React from 'react'
import Serial6 from '../SwiperSlide/Serial6'
function Dolfini({sc}) {
  return (
    <>
        <div className='px-12 mt-10 bg-[url("../../Image/pesaredolfini/bg.jpg")] bg-cover py-10' ref={sc}>
        <h1 className='mb-9 text-2xl'><a href="#">پسر دلفینی</a></h1>
        <p className='text-[#949494] text-sm mb-4'>کارگردان: رضا فصاحت</p>
        <div className='mb-5'>
        <span className='rounded-full w-[6%] text-center bg-[#282828] me-2 px-4 p-1 text-sm inline-block'>انیمیشن</span>
        <span className='rounded-full w-[7%] text-center bg-[#282828] px-4 p-1 text-sm inline-block'>ماجراجویی
</span> 
        </div>
        <p className='mb-4'>ماهی‌ها در حال بازی با ستاره‌های دریایی هستند و آن ها را مثل توپک به سمت صخره ها پرتاب می کنند و هر که آن ها را دورتر بیاندا...</p>
        <div className='my-10'>
          <Serial6/>
        </div>
    </div>
    </>
  )
}

export default Dolfini