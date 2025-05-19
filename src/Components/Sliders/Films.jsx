import React from 'react'
import Img1 from "../../Image/films/nargil2.webp"
import Img2 from "../../Image/films/fosil.webp"
import Img3 from "../../Image/films/hayola.webp"
import Img4 from "../../Image/films/mov_146817_156853.webp"
import Img5 from "../../Image/films/bihamechiz.webp"
import Img6 from "../../Image/films/zanborekargar.webp"

function Films() {
  return (
    <>
    <div className='w-[100%] flex justify-evenly mt-10 flex-col md:flex-row px-10 '>
    <div className='w-[100%] flex justify-around mb-3 md:mb-0'>
        <div className='w-[30%]  relative mx-3 lg:mx-0 rounded-lg flex justify-center'><img src={Img1} className='w-[100%] rounded-lg opacity-[0.6] hover:opacity-[1]' alt="" /><p className='absolute hidden md:inline-block bottom-5 text-white'>اختصاصی <span className='text-yellow-400'>فیلیمو</span></p></div>
        <div className='w-[30%]  relative mx-3 lg:mx-0 rounded-lg flex justify-center'><img src={Img2} className='w-[100%] rounded-lg opacity-[0.6] hover:opacity-[1]' alt="" /><p className='absolute hidden md:inline-block bottom-5 text-white'>اختصاصی <span className='text-yellow-400'>فیلیمو</span></p></div>
        <div className='w-[30%]  relative mx-3 lg:mx-0 rounded-lg flex justify-center'><img src={Img3} className='w-[100%] rounded-lg opacity-[0.6] hover:opacity-[1]' alt="" /><p className='absolute hidden md:inline-block bottom-5 text-white'>اختصاصی <span className='text-yellow-400'>فیلیمو</span></p></div>
        </div>
        <div className='w-[100%] flex justify-around'>
        <div className='w-[30%]  relative mx-3 lg:mx-0 rounded-lg flex justify-center'><img src={Img4} className='w-[100%] rounded-lg opacity-[0.6] hover:opacity-[1]' alt="" /><p className='absolute hidden md:inline-block bottom-5 text-white'>اختصاصی <span className='text-yellow-400'>فیلیمو</span></p></div>
        <div className='w-[30%]  relative mx-3 lg:mx-0 rounded-lg flex justify-center'><img src={Img5} className='w-[100%] rounded-lg opacity-[0.6] hover:opacity-[1]' alt="" /><p className='absolute hidden md:inline-block bottom-5 text-white'>اختصاصی <span className='text-yellow-400'>فیلیمو</span></p></div>
        <div className='w-[30%]  relative mx-3 lg:mx-0 rounded-lg flex justify-center'><img src={Img6} className='w-[100%] rounded-lg opacity-[0.6] hover:opacity-[1]' alt="" /><p className='absolute hidden md:inline-block bottom-5 text-white'>اختصاصی <span className='text-yellow-400'>فیلیمو</span></p></div>
        </div>
    </div>
    </>
  )
}

export default Films