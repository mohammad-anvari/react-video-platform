import React from 'react'
import FreeSlider from './FreeSlider'
function FreeMovie() {
  return (
    <>
    <div className='text-white w-[100%]'>
        <h1 className='text-2xl my-10 ps-16'>محتوا های رایگان</h1>
        <div className='w-[90%] mx-auto'>
            <FreeSlider/>
        </div>
    </div>
    </>
  )
}

export default FreeMovie