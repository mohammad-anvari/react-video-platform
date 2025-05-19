import React, { useState } from 'react'
import "./subscription.css"
import Accordion from './Accordionbuy'
import "../Information/info.css"
import "../../Css/item.css"
import Img1 from "../../Image/Icon/fa-filimo-light-logo.svg"
import Img2 from "../../Image/subscription/mov_148153_181761-b.jpg"
import Img3 from "../../Image/subscription/mov_148154_181786-b.jpg"
import Img4 from "../../Image/subscription/mov_146824_164351-b.jpg"
import Img5 from "../../Image/subscription/1month-new.svg"
import Img6 from "../../Image/subscription/3month-new.svg"
import Img7 from "../../Image/subscription/6month-new.svg"
import Img8 from "../../Image/subscription/12month.svg"
function Subscription() {
    const [islistopen,setIslistopen]=useState(false);
    const togglelist=()=>{
        setIslistopen(!islistopen)
    }
  return (
    <>
    <div className='w-[100%] bg-[#F5F5F5] flex-row justify-center h-[100%] numfont'>
        <div className='w-[100%]'>
        <div className="w-[5%] py-2 ms-12">
                <a href="#" className='w-[100%]'><img src={Img1} alt="" /></a>
            </div>
        </div>
        <div className='w-[100%] flex justify-center '>
        <div className='w-[40%] '>
            <div className='w-[100%] flex justify-start pt-10 pb-5'>
                <div className='w-[28%] relative h-auto'>
                    <img src={Img2} className='w-[25%] rounded-lg absolute left-[7%]  top-1 rotate-[-10deg] opacity-[.7]' alt="" />
                    <img src={Img3} className='w-[25%] rounded-lg absolute right-[33%] top-1 rotate-[10deg]  opacity-[.7]' alt="" />
                    <img src={Img4} className='w-[28%] rounded-lg absolute right-[49%]' alt="" />
                </div>
                <div className='w-[63%] text-[14px]'>
                <h1 className='font-bold mb-2'>خرید اشتراک فیلیمو</h1>
                <p>اشتراکی که تهیه می‌کنید برای تماشای<span className='font-bold text-black'> جوکر 2، زخم کاری: انتقام، قطب شمال و بیش از 95,000 فیلم و سریال </span>دیگر است .</p>
                </div>
            </div>
            <div className='w-[100%]  p-5 flex justify-center'>
                <div className='w-[90%]'>
                    <p className='absolute bg-[#E4F6EC] text-[14px] px-2 rounded-2xl text-[#1CB561] font-bold top-[24.5%] right-[34.5%]'>ویژه کاربران جدید!</p>
                    <button className='w-full py-5 btbuy rounded-md flex border bg-white border-[#EAEAEA] justify-between'>
                        <div className='w-[30%] '>
                        <img src={Img5} className='inline-block' alt="" />
                        <span className='ms-3 font-bold text-[14px]'>یک ماهه</span>
                        </div>
                        <div className='flex w-[40%] text-[12px] justify-center items-center font-bold'>
                            <p className='me-2 line-through text-[#707070] price2 '>165,000 تومان</p>
                            <h3 className='px-3 py-[6px] border rounded-lg border-[#14A455] text-[#0C9349] price'>115,000 تومان</h3>
                        </div>
                    </button>
                    <p className='absolute z-10 bg-[#18A456] text-white px-[4px] py-[2px] right-[34%] font-bold text-center rounded-2xl top-[37.5%] text-[12px]'>ماهانه 99 هزار تومان ویژه کاربران جدید!</p>
                    <button className='w-full py-5 my-5 btbuy rounded-md flex border bg-[#DAEDE3] border-[#0C9349] justify-between hover:scale-[103%] transition-transform btntow'>
                        <div className='w-[30%] '>
                        <img src={Img6} className='inline-block' alt="" />
                        <span className='ms-3 font-bold text-[14px]'>سه ماهه</span>
                        </div>
                        <div className='flex w-[40%] text-[12px] justify-center items-center font-bold'>
                            <p className='me-2 line-through text-[#444444] price2 '>495,000 تومان</p>
                            <h3 className='px-3 py-[6px] border rounded-lg price text-white bg-[#1cb561]'>297,000 تومان</h3>
                        </div>
                    </button>
                    <p className='absolute bg-[#E4F6EC] text-[14px] px-2 rounded-2xl text-[#1CB561] font-bold top-[50.5%] right-[34.5%]'>ویژه کاربران جدید!</p>
                    <button className='w-full py-5 mb-5 btbuy rounded-md flex border bg-white border-[#EAEAEA] justify-between'>
                        <div className='w-[30%] '>
                        <img src={Img7} className='inline-block' alt="" />
                        <span className='ms-3 font-bold text-[14px]'>شش ماهه</span>
                        </div>
                        <div className='flex w-[40%] text-[12px] justify-center items-center font-bold'>
                            <p className='me-2 line-through text-[#707070] price2 '>990,000 تومان</p>
                            <h3 className='px-3 py-[6px] border rounded-lg border-[#14A455] text-[#0C9349] price'>594,000 تومان</h3>
                        </div>
                    </button>
                    <button className='w-full py-5 btbuy rounded-md flex border bg-white border-[#EAEAEA] justify-between'>
                        <div className='w-[30%] '>
                        <img src={Img8} className='inline-block' alt="" />
                        <span className='ms-3 font-bold text-[14px]'>یک ساله</span>
                        </div>
                        <div className='flex w-[43.5%] text-[12px] justify-center items-center font-bold'>
                            <p className='me-2 line-through text-[#707070] price2 '>1,980,000 تومان</p>
                            <h3 className='px-3 py-[6px] border rounded-lg border-[#14A455] text-[#0C9349] price'>1,188,000 تومان</h3>
                        </div>
                    </button>
                    <p className='text-[#676767] text-[14px] mt-3'>%10 مالیات بر ارزش افزوده به قیمت همه اشتراک‌ها اضافه می‌شود.</p>
                    <div className='w-[100%] pt-8'>
                    <Accordion/>
                    <h2 className='pt-3'><span className='bi bi-check-lg text-[#1CB561] font-bold text-[17px] inline-block me-2'></span><p className='inline-block text-[14px] text-[#6C6C6C]'>می‌توانید فیلم و سریال‌های فیلیمو را دانلود و بدون اینترنت تماشا کنید.</p></h2>
                    <h2 className='pt-3'><span className='bi bi-check-lg text-[#1CB561] font-bold text-[17px] inline-block me-2'></span><p className='inline-block text-[14px] text-[#6C6C6C]'>می‌توانید با یک اشتراک به صورت همزمان در ۳ دستگاه مختلف فیلیمو تماشا کنید.</p></h2>
                    </div>
                    <div className='w-[100%] p-5 flex justify-start'>
            <div className='w-[100%]'>
                    <button className='w-[25%] flex items-center justify-center py-1 text-[#666666] bg-[#EBEBEB] rounded-3xl' onClick={togglelist}><span className='bi bi-headphones me-1 pt-1'></span>پشتیبانی <span className={`bi bi-chevron-down  transition  text-[10px] ps-1 pt-1`}></span></button>
                    {islistopen && (
                                        <div className={`w-[43%] overflow-hidden transition-max-height duration-300`}>

                                        <div className="w-[100%] pt-3">
                                            <ul className='list-inside w-[100%] border-r-2 border-r-[#CACACA] ps-2 p-0 block'>
                                                <li className='text-[13px] text-[#666666] p-0 m-0 block'><span className='bi bi-envelope-fill text-[14px]'></span> ایمیل: <a href="#" className='text-[#CD7500] inline-block my-2'>payment@filimo.com</a></li>
                                                <li className='text-[13px] text-[#666666] block p-0 m-0'><span className='bi bi-telephone-fill text-[14px]'></span> شماره تلفن: <a href="#" className='text-[#CD7500] inline-block my-2'>74524(021)</a></li>
                                                <li className='text-[13px] text-[#666666] block p-0 m-0'><span className='bi bi-question-circle-fill text-[15px]'></span> <a href="#" className='text-[#CD7500] inline-block font-bold ms-3 pb-1'>پرسش های متداول</a></li>
                                            </ul>
                                        </div>
                                    </div>
                    )}
            </div>
        </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    </>
  )
}

export default Subscription