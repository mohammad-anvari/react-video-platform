import React, { useState } from 'react'
import Serials from './Serials'
import Films from './Films'

function SerialSlider() {
  const [serialmovies,setSerialmovies]=useState(false);
  function changeSet(serialmovies){
    setSerialmovies(serialmovies);
  }
  return (
    <>
    <div className='w-[100%] text-white mt-14'>
      <div className='flex flex-col md:flex-row mx-auto md:mx-0 md:ms-10 w-[50%] text-center'>
        <p className='text-lg mb-2'>محبوب ترین های فیلیمو</p>
        <div className=' ms-4 text-center border-2 border-[#232323] md:w-[25%] lg:w-[20%] rounded-full'>
          <a href="#" className='inline-block w-[50%] py-1' onClick={(serialmovies)=>changeSet(false)}>سریال</a>
          <a href="#" className='inline-block w-[50%] py-1' onClick={(serialmovies)=>changeSet(true)}>فیلم</a>
        </div>
      </div>
      {serialmovies? <Films/>:<Serials/>}
    </div> 
    </>
  )
}

export default SerialSlider