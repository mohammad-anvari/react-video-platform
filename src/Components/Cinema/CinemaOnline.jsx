import React from 'react'
import './Cinema.css'
import { useNavigate } from 'react-router-dom'
import Img1 from "../../Image/Cinema/mov_146927_158189.jpg"
import Img2 from "../../Image/Cinema/ticket.png"
import Img3 from "../../Image/Cinema/mov_146824_157626.jpg"
import Img4 from "../../Image/Cinema/ticket.png"
import Img5 from "../../Image/Cinema/mov_146288_155645.jpg"
import Img6 from "../../Image/Cinema/ticket.png"
import Img7 from "../../Image/Cinema/mov_145894_154677.jpg"
import Img8 from "../../Image/Cinema/ticket.png"
function CinemaOnline() {
    const navigate=useNavigate();
    const pageaho=()=>{
        navigate('/Aho')
    }
    const pagehavaei=()=>{
        navigate('/havaei')
    }
    const pagenegahbaneshab=()=>{
        navigate('/Negahbaneshab')
    }
    const pagegijgah=()=>{
        navigate('/gijgah')
    }
  return (
    <>
    <div className='w-[100%] bg-[url("../../Image/About/bg-cinama.png")] h-[100vh] md:h-auto bg-cover overflow-y-scroll md:overflow-auto'>
        <div className='w-[100%] text-center text-white pt-14'>
            <h1 className='text-2xl font-bold'>سینما آنلاین فیلیمو</h1>
            <div className='flex flex-col md:flex-row w-[100%] justify-evenly mt-8 text-[#5C585A] font-bold'>
            <p>
              <span className="bi bi-check-circle-fill text-green-700 me-1"></span>
              فیلم‌های روز سینمای ایران
            </p>
            <p className='my-3 md:my-0'>
              <span className="bi bi-check-circle-fill text-green-700 me-1"></span>
              ۸ ساعت زمان برای مشاهده فیلم در هر کجا
            </p>
            <p>
              <span className="bi bi-check-circle-fill text-green-700 me-1"></span>
              خرید یک بلیت برای تماشا همراه با همه خانواده
            </p>
            </div>
        </div>
        <div className='w-[100%] flex flex-col items-center'>
            <div className='w-[80%] flex flex-col md:flex-row mt-12'>
            <div className='border rounded-xl border-[#32343C] flex flex-col items-center md:me-5 md:flex-row w-[100%] md:w-[50%] bg-cinema shadow-2xl mb-6'>
                    <div className='w-[70%] md:w-[50%] rounded-lg p-3'>
                        <a href="#"><img src={Img1} className='w-[100%]  rounded-lg' alt="" /></a>
                    </div>
                    <div className='w-[100%] px-5 py-2 text-white'>
                        <div className='flex flex-row justify-between w-[100%]'>
                            <p className='font-bold text-xl'>آهو</p>
                            <p className='text-xs bg-[#0F0B0D] rounded-full px-1 text-center my-auto py-1'><img src={Img2} className='inline-block w-[15%]' alt="" />اکران انلاین</p>
                            </div>
                            <p className='text-sm text-[#C1BFBF] mt-2 mb-5 md:mt-7 md:mb-10'>کارگردان: هوشنگ گلمکانی</p>
                            <span className='bg-[#250f12] rounded-full px-2 text-xs me-3'>درام</span>
                            <span className='bg-[#230E11] rounded-full px-2 text-xs'>خانوادگی</span>
                            <button className='border border-[#98888A] text-[#98888A] block py-1 px-2 rounded-lg mt-5 md:mt-12 hover:bg-black w-[100%] md:w-auto' onClick={pageaho}>خرید بلیت</button>
                    </div>
                </div>
                <div className='border rounded-xl border-[#32343C] flex flex-col items-center  md:flex-row w-[100%] md:w-[50%] bg-cinema shadow-2xl mb-6'>
                    <div className='w-[70%] md:w-[50%] rounded-lg p-3'>
                        <a href="#"><img src={Img3} className='w-[100%]  rounded-lg' alt="" /></a>
                    </div>
                    <div className='w-[100%] px-5 py-2 text-white'>
                        <div className='flex flex-row justify-between w-[100%]'>
                            <p className='font-bold text-xl'>هاوایی</p>
                            <p className='text-xs bg-[#0F0B0D] rounded-full px-1 text-center my-auto py-1'><img src={Img4} className='inline-block w-[15%]' alt="" />اکران انلاین</p>
                            </div>
                            <p className='text-sm text-[#C1BFBF] mt-2 mb-5 md:mt-7 md:mb-10'>کارگردان: بهمن گودرزی</p>
                            <span className='bg-[#250f12] rounded-full px-2 text-xs me-3'>کمدی</span>
                            <span className='bg-[#230E11] rounded-full px-2 text-xs'>ماجراجویی</span>
                            <button className='border border-[#98888A] text-[#98888A] block py-1 px-2 rounded-lg mt-5 md:mt-12 hover:bg-black w-[100%] md:w-auto' onClick={pagehavaei}>خرید بلیت</button>
                    </div>
                </div>
            </div>
            <div className='w-[80%] flex flex-col md:flex-row mt-3'>
            <div className='border rounded-xl border-[#32343C] flex flex-col items-center md:me-5 md:flex-row w-[100%] md:w-[50%] bg-cinema shadow-2xl mb-6'>
                    <div className='w-[70%] md:w-[50%] rounded-lg p-3'>
                        <a href="#"><img src={Img5} className='w-[100%]  rounded-lg' alt="" /></a>
                    </div>
                    <div className='w-[100%] px-5 py-2 text-white'>
                        <div className='flex flex-row justify-between w-[100%]'>
                            <p className='font-bold text-xl'>نگهبان شب</p>
                            <p className='text-xs bg-[#0F0B0D] rounded-full px-1 text-center my-auto py-1'><img src={Img6} className='inline-block w-[15%]' alt="" />اکران انلاین</p>
                            </div>
                            <p className='text-sm text-[#C1BFBF] mt-2 mb-5 md:mt-7 md:mb-10'>کارگردان: رضا میرکریمی</p>
                            <span className='bg-[#250f12] rounded-full px-2 text-xs me-3'>درام</span>
                            <button className='border border-[#98888A] text-[#98888A] block py-1 px-2 rounded-lg mt-5 md:mt-12 hover:bg-black w-[100%] md:w-auto' onClick={pagenegahbaneshab}>خرید بلیت</button>
                    </div>
                </div>
                <div className='border rounded-xl border-[#32343C] flex flex-col items-center md: md:flex-row w-[100%] md:w-[50%] bg-cinema shadow-2xl mb-6'>
                    <div className='w-[70%] md:w-[50%] rounded-lg p-3'>
                        <a href="#"><img src={Img7} className='w-[100%]  rounded-lg' alt="" /></a>
                    </div>
                    <div className='w-[100%] px-5 py-2 text-white'>
                        <div className='flex flex-row justify-between w-[100%]'>
                            <p className='font-bold text-xl'>گیجگاه</p>
                            <p className='text-xs bg-[#0F0B0D] rounded-full px-1 text-center my-auto py-1'><img src={Img8} className='inline-block w-[15%]' alt="" />اکران انلاین</p>
                            </div>
                            <p className='text-sm text-[#C1BFBF] mt-2 mb-5 md:mt-7 md:mb-10'>کارگردان: عادل تبریزی</p>
                            <span className='bg-[#250f12] rounded-full px-2 text-xs me-3'>کمدی</span>
                            <span className='bg-[#230E11] rounded-full px-2 text-xs'>عاشقانه</span>
                            <button className='border border-[#98888A] text-[#98888A] block py-1 px-2 rounded-lg mt-5 md:mt-12 hover:bg-black w-[100%] md:w-auto' onClick={pagegijgah}>خرید بلیت</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default CinemaOnline