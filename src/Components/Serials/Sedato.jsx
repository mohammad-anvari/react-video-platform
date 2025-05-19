import React from 'react'
import Serial2 from "../SwiperSlide/Serial2"
function Sedato({sc}) {
  return (
    <>
        <div className='px-12 mt-10 bg-[url("../../Image/sedato/bg.jpg")] bg-cover py-10' ref={sc}>
        <h1 className='mb-9 text-2xl'><a href="#">صدا تو</a></h1>
        <p className='text-[#949494] text-sm mb-4'>کارگردان: حامد جوادزاده</p>
        <div className='mb-5'>
        <span className='rounded-full w-[10%] bg-[#282828] me-2 px-4 pb-1 text-sm'>ریلیتی شو</span>
        <span className='rounded-full w-[10%] bg-[#282828] px-4 pb-1 text-sm'>گیم شو
</span> 
        </div>
        <p className='mb-4'>«صداتو»، یک مسابقه موسیقایی پرمعما و جذاب است که محسن کیایی با چهره ای متفاوت اجرای آن را به عهده دارد. چهره های آشنا...</p>
        <div className='my-10'>
          <Serial2/>
        </div>
    </div>
    </>
  )
}

export default Sedato