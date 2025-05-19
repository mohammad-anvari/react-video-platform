import React from 'react'
import Comments from './Comments'

function Coment() {

  return (
    <>
    <div className='w-[100%] bg-[#151515] flex justify-center'>
        <div className='w-[90%]'>
        <div className='w-[100%] mt-20 mb-10 flex flex-row justify-between'>
            <h1 className='text-2xl text-white ms-10'>نظر کاربران بعد از تماشای فیلیمو</h1>
        </div>
        <Comments/>
        </div>
    </div>
    </>
  )
}

export default Coment