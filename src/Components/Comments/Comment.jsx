import React from 'react'
import '../Comments/scroll.css'
import Img1 from "../../Image/Comments/virgol.png"
import Img2 from "../../Image/Comments/1.png"
function Comment({elem}) {
  if(!elem.comment){
    return null;
  }
  return (
    <>
<div className="w-[95%] sm:w-[90%] h-[200px] border border-[#26272B] text-white p-4 rounded-2xl">
  <div className='flex flex-row w-[100%] justify-around'>
    <div className='w-[15%] sm:flex flex-row items-center hidden'>
      <img src={Img1} alt="" />
    </div>
    <div className='flex flex-row w-[100%] sm:w-[85%] justify-end items-center'>
      <h2 className=' text-[12px] sm:text-base text-center me-2 text-[#3D3E40]'>{elem.name}</h2>
      <img src={Img2} className='w-[20%] md:w-[10%] hidden' alt="" />
    </div>
  </div>
  <div className='w-[100%] text-end mt-3 py-4 overflow-y-auto break-words h-[100px] scrollbar-custom'>
    <p className='text-[13px] text-[#ECECEC]'>{elem.comment}</p>
  </div>
</div>

    </>
  )
}

export default Comment