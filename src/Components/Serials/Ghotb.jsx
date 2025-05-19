import React from 'react'
import Serial1 from '../SwiperSlide/Serial1'


function Ghotb({sc}) {
  return (
    <>
    <div className='px-12 mt-10 bg-[url("../../Image/Ghotbeshomal/bg.jpg")] bg-cover py-10' ref={sc}>
        <h1 className='mb-9 text-2xl'><a href="#">قطب شمال</a></h1>
        <p className='text-[#949494] text-sm mb-4'>کارگردان: امین محمودی یکتا</p>
        <div className='mb-5 w-[100%]'>
        <span className='rounded-full w-[4%] bg-[#282828] me-2 px-4 py-[2px] text-center  text-sm inline-block'>درام</span>
        <span className='rounded-full w-[5%] bg-[#282828] px-4 p-1 text-center text-sm inline-block'>عاشقانه</span> 
        </div>
        <p className='mb-4'>همایون و ارغوان در آستانه ازدواج، قربانی خیانتی هولناک می شوند. همایون پشت دیوارهای زندان برای انتقام از سامان لحظه شماری م...</p>
        <div className='my-10'>
          <Serial1/>
        </div>
    </div>
    </>
  )
}

export default Ghotb