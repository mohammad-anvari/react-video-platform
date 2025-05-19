import React from 'react'
import Serial4 from "../SwiperSlide/Serial4"
function Sepanj({sc}) {
  return (
    <>
        <div className='px-12 mt-10 bg-[url("../../Image/sepanj/bg.jpg")] bg-cover py-10' ref={sc}>
        <h1 className='mb-9 text-2xl'><a href="#">سپنج</a></h1>
        <div className='mb-5'>
        <span className='rounded-full w-[10%] bg-[#282828] me-2 px-4 pb-1 text-sm'>تاک شو
</span>
        </div>
        <p className='mb-4'>سپنج دهم، گفتگوی علی درستکار است با دکتر سید علی موسوی گرمارودی شاعر، نویسنده و حافظ پژوه که با اتکا به شعر گپی آرام و...</p>
        <div className='my-10'>
          <Serial4/>
        </div>
    </div>
    </>
  )
}

export default Sepanj