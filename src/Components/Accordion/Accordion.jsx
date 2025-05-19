import React from 'react'
import MyAccordion from './MyAccordion'

function Accordion() {
  return (
    <>
    <div className='w-[100%] bg-[#101010] py-16'>
        <div className='w-[100%] text-center mb-6'>
            <h1 className='text-xl text-white mb-2'>سوالات متداول</h1>
            <p className='text-sm text-[#929292]'>سوالات شایع دیگر کاربران شاید برای شما پیش امده باشد</p>
        </div>
        <div className='w-[100%] flex justify-center'>
            <div className='w-[70%]'>
                <MyAccordion/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Accordion