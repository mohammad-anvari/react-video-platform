import React from 'react'
import Img1 from "../../Image/About/TVBG-yaghi.jpeg"

function About2md() {
  return (
    <>
    <div className='w-[100%] bg-[#0D0D0D] mt-7 text-white md:hidden'>
        <div className='w-[100%] sm:w-[70%] ps-4 pt-16'>
            <h1 className='text-2xl font-bold'>چطور با تلویزیون، فیلیمو تماشا کنم؟</h1>
            <p className='text-[#686868] mt-5 text-sm'>ما برای راحتی شما و تماشای فیلیمو روی تلویزیون‌های مختلف 6 روش را فراهم کردیم. هرکدام از این 6 روش یک ویدیو آموزشی دارند که می‌توانید از لینک زیر، آن‌ها را تماشا کنید و روشی که با تلویزیون شما سازگار است را انتخاب کنید.</p>
        </div>
        <div className='w-[100%] mt-8'>
            <img src={Img1} className='w-[96%] block mx-auto' alt="" />
        </div>
        <div className='px-4 w-[100%] pb-9'>
        <h1 className='text-xl mt-5'><span className='bi bi-tv text-[#6D6D6D] me-3 text-2xl'></span>تلوزیون</h1>
            <p className='ms-8 mt-2 text-xs text-[#686868]'>Amazon Fire TV - LG TVs - Chrome Cast - Apple TV - Android TV devices - Samsung</p>
            <h1 className='mt-7 text-xl'><span className='bi bi-android text-[#6D6D6D] text-2xl me-3'></span>اندروید تی وی</h1>
            <p className='ms-8 mt-2 text-xs text-[#686868]'>NVIDIA - amazon - xiaomi - minix - skystream - turewell - ematic - humax - matricom</p>
            <div className='w-[100%] flex justify-center'>
                
            <button className='w-[100%] text-xs bg-[#737373] py-2 px-3 rounded-lg mt-7 ms-4 opacity-[0.8] hover:opacity-[1]'><span>ویدیوهای آموزشی تماشا با تلوزیون</span><span className='bi bi-chevron-left ms-1'></span></button> </div>         
        </div>
    </div>
    </>
  )
}

export default About2md