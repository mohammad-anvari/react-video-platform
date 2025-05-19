import React from 'react'
import About2md from './About2md'
import Img1 from "../../Image/About/TVBG.webp"

function About2() {
  return (
    <>
    <div className='w-[100%] md:flex  flex-row hidden bg-[#0D0D0D] mt-7  text-white justify-center font-bold'>
        <div className='w-[50%] md:p-12'>
            <div className='ms-12 p-3'>
            <h1 className='text-2xl'>چطور با تلویزیون، فیلیمو تماشا کنم؟</h1>
            <p className='text-sm text-[#AEAEAE] mt-5'>ما برای راحتی شما و تماشای فیلیمو روی تلویزیون‌های مختلف 6 روش را فراهم کردیم. هرکدام از این 6 روش یک ویدیو آموزشی دارند که می‌توانید از لینک زیر، آن‌ها را تماشا کنید و روشی که با تلویزیون شما سازگار است را انتخاب کنید.</p>
            <h1 className='text-xl mt-5'><span className='bi bi-tv text-[#6D6D6D] me-3 text-2xl'></span>تلوزیون</h1>
            <p className='ms-8 mt-2 text-xs text-[#686868]'>Amazon Fire TV - LG TVs - Chrome Cast - Apple TV - Android TV devices - Samsung</p>
            <h1 className='mt-7 text-xl'><span className='bi bi-android text-[#6D6D6D] text-2xl me-3'></span>اندروید تی وی</h1>
            <p className='ms-8 mt-2 text-xs text-[#686868]'>NVIDIA - amazon - xiaomi - minix - skystream - turewell - ematic - humax - matricom</p>
            <button className='text-xs bg-[#737373] py-2 px-3 rounded-lg mt-10 ms-2 opacity-[0.8] hover:opacity-[1]'><span>ویدیوهای آموزشی تماشا با تلوزیون</span><span className='bi bi-chevron-left ms-1'></span></button>
            </div>
        </div>
        <div className='w-[50%] pt-8 flex items-center'>
            <img src={Img1} className='block w-[100%]' alt="" />
        </div>
    </div>
    <About2md/>
    </>
  )
}

export default About2