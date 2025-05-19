import React, { useEffect, useRef, useState } from 'react'
import Header from "../Header/Header"
import '../../Css/item.css'
import Ahoslider from './Ahoslider'
import "./buyticets.css"
import Img1 from "../../Image/Buytickets/Negahbaneshab/Negahban-ShabCover.jpg"
import Img2 from "../../Image/Buytickets/Negahbaneshab/mov_146288_155645.webp"
import Img3 from "../../Image/Buytickets/Aho/15.svg"
import Img4 from "../../Image/Buytickets/Negahbaneshab/rvw_cast_6188_1-b.webp"
import Img5 from "../../Image/Buytickets/Negahbaneshab/rvw_cast_65301_2454.webp"
import Img6 from "../../Image/Buytickets/Negahbaneshab/rvw_cast_10939_1-b.webp"
import Img7 from "../../Image/Buytickets/Negahbaneshab/rvw_cast_82235_2993.webp"
import Img8 from "../../Image/Buytickets/Negahbaneshab/rvw_cast_82236_6014.webp"
import Img9 from "../../Image/Buytickets/Negahbaneshab/rvw_cast_82237_2003.webp"
import Img10 from "../../Image/Buytickets/Negahbaneshab/art-board.webp"
import Img11 from "../../Image/Buytickets/Negahbaneshab/rvw_cast_81816_2365.webp"
import Img12 from "../../Image/Buytickets/Negahbaneshab/rvw_cast_44373_940-b.webp"
import Img13 from "../../Image/Buytickets/Negahbaneshab/rvw_cast_82239_2687.webp"
import Img14 from "../../Image/Buytickets/Negahbaneshab/art-board.webp"
import Img15 from "../../Image/Buytickets/Negahbaneshab/art-board.webp"
import Img16 from "../../Image/Buytickets/Negahbaneshab/rvw_cast_82242_2811.webp"
import Img17 from "../../Image/Buytickets/Negahbaneshab/rvw_cast_331_418-b.webp"
import Img18 from "../../Image/Buytickets/Negahbaneshab/rvw_cast_1028_1-b.webp"
import Img19 from "../../Image/Buytickets/Aho/default-user.webp"
function Negahbaneshab() {
  const [isopen,setIsopen]=useState(false);
  const [height, setHeight] = useState('0px');
  const contentRef = useRef(null);
  const itemRef = useRef(null);


  useEffect(() => {
      if (isopen) {
          contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
          itemRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
          contentRef.current.style.maxHeight = '0px';
      }
  }, [isopen]);
  const comment=()=>{
    setIsopen(!isopen);
  }
  return (
    <>
    <div className='w-[100%] h-[2017.53px] bg-[#151515]  relative'>
        <div className='w-[100%] block'><Header/></div>
        <div className='w-[100%] h-[514.95px] relative top-[2.6%]  flex items-center justify-center'>
            <div className='w-[100%] h-[100%]'><img src={Img1} className='w-[100%] h-full object-cover brightness-50 absolute ' alt="" /></div>
            <div className='w-[1200px] h-[400.95px] absolute px-[32px]'>
              <div className='w-[1136px] h-[320.15px]  mb-[16px] flex'>
                <div className='w-[240px] h-[320.15px] me-[32px]'>
                  <a href="#">
                  <img src={Img2} className='rounded-md' alt="" />
                  </a>
                </div>
                <div className='w-[271.86px] h-[320.15px]'>
                  <div className='w-[271.86px] h-[58.4px]'>
                    <h1 className='text-[16px] text-[#FFFFFF] font-medium '>فیلم نگهبان شب</h1>
                  </div>
                  <div className='w-[271.86px] h-[52px] flex'>
                  <div className='w-[28px] h-[20px] ps-[5px] pt-[4px] text-center bg-[#E1A928] rounded-r-3xl'><h1 className='font-bold text-[10px] text-[#292929]'>Imdb</h1></div>
                  <span className='w-[47.81px] h-[20.4px] flex items-center pt-[2px]  bg-[#F6B828] ps-[3.5px] pe-[7px] rounded-l-3xl text-center'>
                    <span className='text-[10px] font-bold inline-block'>6.4 /10</span>
                  </span>
                  </div>
                  <div className='w-[271.86px] h-[27px]'>
                    <div>
                      <img src={Img3} className='inline-block me-[4px]' alt="" />
                      <p className='inline-block text-[#F9BE3C] numfont text-[12.7px]'>مناسب بالای 15 سال</p>
                    </div>
                  </div>
                  <div className='w-[271.86px] h-[106.4px] mt-[76.350px]'>
                  <div className='w-[268.66px] h-[77.6px]'>
                    <h1 className='text-[10px] font-bold text-white mb-[16px]'>کارگردان: رضا میرکریمی</h1>
                    <p className='text-[10px] font-bold text-white mb-[24px] numfont'>یک ساعت و 57 دقیقه - محصول ایران - 1400 - کیفیت HD
                    </p>
                  </div>
                  <div className='w-[271.86px] h-[28.6px]'>
                    <span className='w-[35.06px] h-[28.6px] rounded-3xl bg-[#4D4D4D] text-[12px] me-[8px] font-bold text-white py-[4px] px-[8px]'>درام</span>
                  </div>
                  </div>
                </div>
              </div>
              <div className='border-t-[.8px] border-t-[#ffffff40] pt-[24px] w-[1136px] h-[64.8px] flex justify-between'>
                <div className='w-[291.63px] h-[40px] flex'>
                  <div className='w-[108.89px] h-[38.15px] me-[8px]'>
                    <button className='w-[108.89px] h-[38.15px] flex items-center justify-around bg-[#ffffff33] text-white py-[10px] px-[16px] rounded-[24px] text-center hover:bg-[#656061] transition duration-[.3s] ease-out'>
                      <span className='inline-block w-[18px] h-[18px] text-[11px] font-medium'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 18 18">
  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
</svg>
                      </span>
                      <span className='text-[11px] inline-block font-bold w-auto h-auto'>بعدا میبینم </span>
                    </button>
                  </div>
                  <a href="#" className='w-[82.5px] h-[38.15px] py-[10px] px-[16px] me-[8px] bg-[#ffffff33] rounded-[24px] text-[white] text-[12px] font-bold flex items-center justify-center text-center hover:bg-[#656061] transition duration-[.3s]'>
                    <span className='w-[18px] h-[18px] text-center inline-block '>
                    <span class="bi bi-cloud-arrow-down w-[18px] h-[18px] text-[16px]"></span>
                    </span>
                    <span className='w-[28.35px] h-[17.6px] text-center inline-block ms-[3px]'>
                      دانلود
                    </span>
                  </a>
                  <button className='w-[40px] h-[40px] rounded-[50%] text-white font-bold  bg-[#ffffff33] hover:bg-[#656061] transition duration-[.3s] text-center flex items-center justify-center text-[20px]'>
                    <span className='w-[24px] h-[24px]  text-center inline-block'>
                      <span className='bi bi-hand-thumbs-up'></span>
                    </span>
                  </button>
                  <button className='w-[40px] h-[40px] rounded-[50%] text-white font-bold  bg-[#ffffff33] hover:bg-[#656061] transition duration-[.3s] text-center flex items-center justify-center text-[20px] ms-[4px]'>
                    <span className='w-[24px] h-[24px]  text-center inline-block'>
                      <span className='bi bi-hand-thumbs-down'></span>
                    </span>
                  </button>
                </div>
                <div className='w-[125.31px] h-[38.15px] items-center flex font-bold'>
                  <a href="#" className='w-[117.31px] h-[38.15px] bg-[#1cb561] rounded-[24px] text-white ms-[8px] py-[10px] px-[16px] hover:bg-[#17924E] transition duration-[.3s] flex items-center'>
                    <span className='inline-block w-[18px] h-[18px] text-[20px]'>
                      <span className='bi bi-play-fill w-[11.25px] h-[11.99px]'></span>
                    </span>
                    <span className='inline-block text-[12px] mt-1 ms-1'>ورود و تماشا</span>
                  </a>
                </div>
              </div>
            </div>
        </div>
        <div className='w-[1519.2px] h-[1442.78px] relative top-[3%]'>
            <div className='w-[1519.2px] h-[364.9px] pt-[40px] mb-[60px] '>
                <div className='w-[1200px] h-[324.9px] px-[30px] mx-auto'>
                    <div className='w-[1140px] h-[324.9px] '>
                    <div className='w-[1140px] h-[324.9px] mb-[32px] flex'>
                        <div className='w-[570px] h-[324.9px]'>
                            <div className='w-[570px] h-[324.9px] bgnegahban brightness-[60%]'></div>
                        </div>
                        <div className='w-[570px] h-[234.4px] ps-[20px]'>
                            <div className='w-[550px] h-[234.4px] '>
                                <div className='w-[550px] h-[91.2px] mb-[32px]'>
                                    <h2 className='w-[550px] h-[23.2px] mb-[8px] font-extrabold text-[16px] text-white'>داستان فیلم نگهبان شب</h2>
                                    <p className='w-[550px] h-[60px] text-[rgba(179,179,179)] text-[11px] font-bold leading-[2]'>رسول نگهبان یک مجتمع ساختمانی است که عاشق دختری کم شنوا به نام نصیبه می شود. ولی با دخالت بهنام کارفرمای طماع پروژه، زندگی ساده و عاشقانه اش دچار مشکلاتی می شود. «نگهبان شب»، برنده سیمرغ بهترین کارگردانی از جشنواره بین المللی فجر و نماینده ایران برای مراسم اسکار 2024 است.</p>
                                </div>
                                <div className='w-[550px] h-[111.2px]'>
                                    <h2 className='w-[550px] h-[23.2px] mb-[8px] font-extrabold text-[16px] text-white'>درباره فیلم نگهبان شب</h2>
                                    <p className='w-[550px] h-[80px] text-[rgba(179,179,179)] text-[11px] font-bold leading-[2]'>فیلم نگهبان شب به کارگردانی <a href="#" className='text-[rgba(217,217,217)] hover:text-[#FDC13C] transition-all duration-[0.3s]'>رضا میرکریمی</a> در سال 1400 ساخته شده است. این فیلم محصول کشور ایران و در ژانر <a href="#" className='text-[rgba(217,217,217)] hover:text-[#FDC13C] transition-all duration-[0.3s]'>درام</a> می‌باشد. در این فیلم محسن کیایی، تورج الوند، لاله مرزبان، علی اکبر اصانلو، صفورا خوش طینت، فهیمه هرمزی، زهرا اسلامی، پرهام غلاملو، محمدصادق ملک، علی غابشی، مهراد اکبرآبادی، ایمان سلگی، نوید بانی، ویشکا آسایش و کیومرث پوراحمد به هنرمندی پرداخته‌اند.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className='w-[1519.2px] h-[376.28px] mb-[60px]'>
                <div className='w-[1200px] h-[376.28px] px-[30px] mx-[159.6px]'>
                    <div className='w-[1140px] h-[376.28px]'>
                        <div className='w-[1140px] h-[376.28px] my-[30px]'>
                            <div className='w-[1140px] h-[376.28px]'>
                                 <div className='w-[1140px] h-[23.2px] mb-[12px]'>
                                     <h1 className='w-[119.8px] h-[23.2px] text-white font-bold text-[14px]'>فیلم‌های پیشنهادی</h1>
                                   </div>
                                   <div className='w-[1140px] h-[341.08px] '>
                                     <Ahoslider/>
                                   </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <div className='w-[1519.2px] h-[172.2px] pt-[32px] mb-[60px]'>
        <div className='w-[1200px] h-[140.2px] px-[30px] mx-[159.6px]'>
          <h2 className='w-[1140px] h-[23.2px] mb-[15px] text-[14px] font-bold text-white'>بازیگران فیلم نگهبان شب</h2>
          <div className='w-[1130px] h-[102px] ms-[10px]'>
            <div className='w-[1130px] h-[102px] text-white'>
              <div className='w-[128.4px] h-[51px] inline-block'>
                <a href="#" className='w-[128.4px] h-[44px] py-[2px] ps-[2px] pe-[10px] mb-[7px] rounded-[40px] block bg-[rgba(255,255,255,.05)]' title='محسن کیایی'>
                  <img src={Img4} className='w-[40px] h-[40px] p-[3px] rounded-[40px] inline' alt="" />
                  <span className='w-[71.88px] h-[23px] inline-block ms-1 font-bold'>
                    <span className='w-[71.88px] h-[20px] text-[12px]'>محسن کیایی</span>
                    <span className='block w-[71.88px] h-[3px]'></span>
                  </span>
                </a>
              </div>
              <div className='w-[111.14px] h-[51px] inline-block'>
                <a href="#" className='w-[111.14px] h-[44px] py-[2px] ps-[2px] pe-[10px] mb-[7px] rounded-[40px] block bg-[rgba(255,255,255,.05)]' title='تورج الوند'>
                  <img src={Img5} className='w-[40px] h-[40px] p-[3px] rounded-[40px] inline' alt="" />
                  <span className='w-[54.61px] h-[23px] inline-block ms-1 font-bold'>
                    <span className='w-[54.61px] h-[20px] text-[12px]'>تورج الوند</span>
                    <span className='block w-[54.61px] h-[3px]'></span>
                  </span>
                </a>
              </div>
              <div className='w-[111.63px] h-[51px] inline-block'>
                <a href="#" className='w-[111.63px] h-[44px] py-[2px] ps-[2px] pe-[10px] mb-[7px] rounded-[40px] block bg-[rgba(255,255,255,.05)]' title='لاله مرزبان'>
                  <img src={Img6} className='w-[40px] h-[40px] p-[3px] rounded-[40px] inline' alt="" />
                  <span className='w-[55.1px] h-[23px] inline-block ms-1 font-bold'>
                    <span className='w-[55.1px] h-[20px] text-[12px]'>لاله مرزبان</span>
                    <span className='block w-[55.1px] h-[3px]'></span>
                  </span>
                </a>
              </div>
              <div className='w-[136.73px] h-[51px] inline-block'>
                <a href="#" className='w-[136.73px] h-[44px] py-[2px] ps-[2px] pe-[10px] mb-[7px] rounded-[40px] block bg-[rgba(255,255,255,.05)]' title='علی اکبر اصانلو'>
                  <img src={Img7} className='w-[40px] h-[40px] p-[3px] rounded-[40px] inline' alt="" />
                  <span className='w-[80.2px] h-[23px] inline-block ms-1 font-bold text-center'>
                    <span className='w-[80.2px] h-[20px] text-[13px]'>علی اکبر اصانلو</span>
                    <span className='block w-[80.2px] h-[3px]'></span>
                  </span>
                </a>
              </div>
              <div className='w-[159.34px] h-[51px] inline-block'>
                <a href="#" className='w-[159.34px] h-[44px] py-[2px] ps-[2px] pe-[10px] mb-[7px] rounded-[40px] block bg-[rgba(255,255,255,.05)]' title='صفورا خوش طینت'>
                  <img src={Img8} className='w-[40px] h-[40px] p-[3px] rounded-[40px] inline' alt="" />
                  <span className='w-[102.81px] h-[23px] inline-block ms1 font-bold text-center'>
                    <span className='w-[102.81px] h-[20px] text-[13px]'>صفورا خوش طینت</span>
                    <span className='block w-[102.81px] h-[3px]'></span>
                  </span>
                </a>
              </div>
              <div className='w-[128.03px] h-[51px] inline-block'>
                <a href="#" className='w-[128.03px] h-[44px] py-[2px] ps-[2px] pe-[10px] mb-[7px] rounded-[40px] block bg-[rgba(255,255,255,.05)]' title='فهیمه هرمزی'>
                  <img src={Img9} className='w-[40px] h-[40px] p-[3px] rounded-[40px] inline' alt="" />
                  <span className='w-[71.5px] h-[23px] inline-block ms-1 font-bold'>
                    <span className='w-[71.5px] h-[20px] text-[13px]'>فهیمه هرمزی</span>
                    <span className='block w-[71.5px] h-[3px]'></span>
                  </span>
                </a>
              </div>
              <div className='w-[120.1px] h-[51px] inline-block'>
                <a href="#" className='w-[120.1px] h-[44px] py-[2px] ps-[2px] pe-[10px] mb-[7px] rounded-[40px] block bg-[rgba(255,255,255,.05)]' title='زهرا اسلامی'>
                  <img src={Img10} className='w-[40px] h-[40px] p-[3px] rounded-[40px] inline' alt="" />
                  <span className='w-[63.58px] h-[23px] inline-block ms-1 font-bold'>
                    <span className='w-[63.58px] h-[20px] text-[13px]'>زهرا اسلامی</span>
                    <span className='block w-[63.58px] h-[3px]'></span>
                  </span>
                </a>
              </div>
              <div className='w-[122.25px] h-[51px] inline-block'>
                <a href="#" className='w-[122.25px] h-[44px] py-[2px] ps-[2px] pe-[10px] mb-[7px] rounded-[40px] block bg-[rgba(255,255,255,.05)]' title='پرهام غلاملو'>
                  <img src={Img11} className='w-[40px] h-[40px] p-[3px] rounded-[40px] inline' alt="" />
                  <span className='w-[65.72px] h-[23px] inline-block ms-1 font-bold'>
                    <span className='w-[65.72px] h-[20px] text-[13px]'>پرهام غلاملو</span>
                    <span className='block w-[65.72px] h-[3px]'></span>
                  </span>
                </a>
              </div>
              <div className='w-[147.79px] h-[51px] inline-block'>
                <a href="#" className='w-[147.79px] h-[44px] py-[2px] ps-[2px] pe-[10px] mb-[7px] rounded-[40px] block bg-[rgba(255,255,255,.05)]' title='محمد صادق ملک'>
                  <img src={Img12} className='w-[40px] h-[40px] p-[3px] rounded-[40px] inline' alt="" />
                  <span className='w-[91.26px] h-[23px] inline-block ms-1 font-bold'>
                    <span className='w-[91.26px] h-[20px] text-[13px]'>محمدصادق ملک</span>
                    <span className='block w-[91.26px] h-[3px]'></span>
                  </span>
                </a>
              </div>
              <div className='w-[116.76px] h-[51px] inline-block'>
                <a href="#" className='w-[116.76px] h-[44px] py-[2px] ps-[2px] pe-[10px] mb-[7px] rounded-[40px] block bg-[rgba(255,255,255,.05)]' title='علی غابشی'>
                  <img src={Img13} className='w-[40px] h-[40px] p-[3px] rounded-[40px] inline' alt="" />
                  <span className='w-[60.24px] h-[23px] inline-block ms-1 font-bold'>
                    <span className='w-[60.24px] h-[20px] text-[13px]'>علی غابشی</span>
                    <span className='block w-[60.24px] h-[3px]'></span>
                  </span>
                </a>
              </div>
              <div className='w-[135.3px] h-[51px] inline-block'>
                <a href="#" className='w-[135.3px] h-[44px] py-[2px] ps-[2px] pe-[10px] mb-[7px] rounded-[40px] block bg-[rgba(255,255,255,.05)]' title='مهراد اکبرآبادی'>
                  <img src={Img14} className='w-[40px] h-[40px] p-[3px] rounded-[40px] inline' alt="" />
                  <span className='w-[78.78px] h-[23px] inline-block ms-1 font-bold'>
                    <span className='w-[78.78px] h-[20px] text-[13px]'>مهراد اکبرآبادی</span>
                    <span className='block w-[78.78px] h-[3px]'></span>
                  </span>
                </a>
              </div>
              <div className='w-[120.46px] h-[51px] inline-block'>
                <a href="#" className='w-[120.46px] h-[44px] py-[2px] ps-[2px] pe-[10px] mb-[7px] rounded-[40px] block bg-[rgba(255,255,255,.05)]' title='ایمان سلگی'>
                  <img src={Img15} className='w-[40px] h-[40px] p-[3px] rounded-[40px] inline' alt="" />
                  <span className='w-[63.94px] h-[23px] inline-block ms-1 font-bold'>
                    <span className='w-[63.94px] h-[20px] text-[13px]'>ایمان سلگی</span>
                    <span className='block w-[63.94px] h-[3px]'></span>
                  </span>
                </a>
              </div>
              <div className='w-[105.68px] h-[51px] inline-block'>
                <a href="#" className='w-[105.68px] h-[44px] py-[2px] ps-[2px] pe-[10px] mb-[7px] rounded-[40px] block bg-[rgba(255,255,255,.05)]' title='نوید بانی'>
                  <img src={Img16} className='w-[40px] h-[40px] p-[3px] rounded-[40px] inline' alt="" />
                  <span className='w-[49.15px] h-[23px] inline-block ms-1 font-bold'>
                    <span className='w-[49.15px] h-[20px] text-[13px]'>نوید بانی</span>
                    <span className='block w-[49.15px] h-[3px]'></span>
                  </span>
                </a>
              </div>
              <div className='w-[132.96px] h-[51px] inline-block'>
                <a href="#" className='w-[132.96px] h-[44px] py-[2px] ps-[2px] pe-[10px] mb-[7px] rounded-[40px] block bg-[rgba(255,255,255,.05)]' title='ویشکا آسایش'>
                  <img src={Img17} className='w-[40px] h-[40px] p-[3px] rounded-[40px] inline' alt="" />
                  <span className='w-[76.44px] h-[23px] inline-block ms-1 font-bold'>
                    <span className='w-[76.44px] h-[20px] text-[13px]'>ویشکا آسایش</span>
                    <span className='block w-[76.44px] h-[3px]'></span>
                  </span>
                </a>
              </div>
              <div className='w-[144.59px] h-[51px] inline-block'>
                <a href="#" className='w-[144.59px] h-[44px] py-[2px] ps-[2px] pe-[10px] mb-[7px] rounded-[40px] block bg-[rgba(255,255,255,.05)]' title='کیومرث پوراحمد'>
                  <img src={Img18} className='w-[40px] h-[40px] p-[3px] rounded-[40px] inline' alt="" />
                  <span className='w-[88.06px] h-[23px] inline-block ms-1 font-bold'>
                    <span className='w-[88.06px] h-[20px] text-[13px]'>کیومرث پوراحمد</span>
                    <span className='block w-[88.06px] h-[3px]'></span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        </div>
         <div className='w-[1519.2px] h-[112px] mb-[30px]'>
         <div className='w-[1200px] h-[112px] px-[30px] mx-[159.6px]'>
           <h2 className='w-[1140px] h-[23.2px] mb-[15px] text-white font-bold text-[14px]'>سایر عوامل فیلم نگهبان شب</h2>
           <div className='w-[1130px] h-[73.8px] ms-[10px]'>
             <ul className='w-[1130px] h-[73.8px] flex'>
               <li className='w-[59.49px] h-[43.8px] me-[30px] mb-[30px] inline-block'>
                 <h3 className='w-[59.49px] h-[20px] mb-[7px] text-[rgba(130,130,130)] text-[12px] leading-[2]'>کارگردان</h3>
           <a href="#" title='هوشنگ گلمکانی' className='w-[59.49px] h-[16.8px] transition duration-[.15s] font-bold text-[11px] text-white hover:text-[#FDC13C]'>
                   رضا میرکریمی
                 </a>
               </li>
               <li className='w-[69.63px] h-[43.8px] me-[30px] mb-[30px] inline-block'>
                 <h3 className='w-[69.63px] h-[20px] mb-[7px] text-[rgba(130,130,130)] text-[12px] leading-[2]'>تهیه کننده</h3>
                 <a href="#" title='جواد نوروزبیگی' className='w-[69.63px] h-[16.8] transition duration-[.15s] font-bold text-[11px] text-white hover:text-[#FDC13C]'>
                  رضا میرکریمی
                 </a>
               </li>
               <li className='w-[75.79px] h-[60.6px] me-[30px] mb-[30px] inline-block'>
                 <h3 className='w-[75.79px] h-[20px] mb-[7px] text-[rgba(130,130,130)] text-[12px] font-medium leading-[2]'>فیلمنامه نویس</h3>
                 <ul className='leading-[1] w-[75.79] h-[33.6]'>
                    <li>                 <a href="#" title='هوشنگ گلمکانی' className='w-[82.4px] h-[16.8] transition duration-[.15s] font-bold text-[11px] text-white hover:text-[#FDC13C]'>
                رضا میر کریمی
                 </a></li>
                    <li>                 <a href="#" title='هوشنگ گلمکانی' className='w-[82.4px] h-[16.8] transition duration-[.15s] font-bold text-[11px] text-white hover:text-[#FDC13C]'>
                محمد داوودی
                 </a></li>
                 </ul>
               </li>
               <li className='w-[84.75px] h-[43.8px] me-[30px] mb-[30px] inline-block'>
                 <h3 className='w-[84.75px] h-[20px] mb-[7px] text-[rgba(130,130,130)] text-[13px] font-bold'>مدیر فیلمبرداری</h3>
                 <a href="#" title='علیرضا زرین دست' className='w-[81.94px] h-[16.8] transition duration-[.15s] font-bold text-[11px] text-white hover:text-[#FDC13C]'>
                  مرتضی هدایی
                 </a>
               </li>
               <li className='w-[90.6px] h-[43.8px] me-[30px] mb-[30px] inline-block'>
                 <h3 className='w-[90.6px] h-[20px] mb-[7px] text-[rgba(130,130,130)] text-[13px] font-medium leading-[2]'>تدوین گر</h3>
                 <a href="#" title='عماد خدابخش' className='w-[90.6px] h-[16.8] transition duration-[.15s] font-bold text-[11px] text-white hover:text-[#FDC13C]'>
                  رضا میرکریمی
                 </a>
               </li>
             </ul>
           </div>
         </div>
         </div>
         <div className='w-[1519.2px] h-[190.6px]' ref={itemRef}>
         <div className='w-[1200px] h-[190.6px] mx-[159.6px] px-[30px]'>
           <div className='w-[1140px] h-[190.6px]'>
             <h2 className='w-[158.96px] h-[23.2px] me-[16px] mb-[15px] font-bold text-[14px] text-white'>
               دیدگاه های فیلم نگهبان شب
             </h2>
             <div className={`w-[1140px] h-[45.6px] ps-[8px] mb-[24px] flex ${isopen?"h-[85.6px]":"h-[45.6px]"} transition-all duration-[0.2s] `}>
               <div className='w-[32px] h-[32px] rounded-[50%] '>
                 <img src={Img19} alt="" />
               </div>
               <div className='w-[1090px] h-[45.6px] ms-[8px]' ref={contentRef} style={{ maxHeight: height }}>
                 <form className={`w-[1090px]  rounded-[4px] transition-all duration-[0.2s] ${isopen?"bg-white h-[80px]": "h-[40px] bg-[rgba(0,0,0,0.1)]"}`} >
                   <div className='w-[1090px] h-[40px]' >
                     <textarea name="comment_body" id="comment_body" className='w-[1090px] h-[40px] rounded-[5px] border-[rgba(25,25,25)] bg-[rgba(255,255,255,0.2)] resize-none outline-none placeholder:text-[#C2C2C2] placeholder:pt-[1px] placeholder:ps-[7px] placeholder:text-[14px] p-[8px]' placeholder='این فیلم چطور بود؟' onClick={comment} ></textarea>
                   </div>
                   <button className='w-[40px] h-[40px] py-[1px] px-[6px] bg-inherit absolute right-[1287px] top-[1273px]'>
                     <span className='w-[23px] h-[24px]'>
                     <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className='rotate-180'>
         <path d="M5.41001 22.0003C4.29001 22.0003 3.58001 21.6203 3.13001 21.1703C2.25001 20.2903 1.63001 18.4203 3.61001 14.4503L4.48001 12.7203C4.59001 12.4903 4.59001 12.0103 4.48001 11.7803L3.61001 10.0503C1.62001 6.08027 2.25001 4.20027 3.13001 3.33027C4.00001 2.45027 5.88001 1.82027 9.84001 3.81027L18.4 8.09027C20.53 9.15027 21.7 10.6303 21.7 12.2503C21.7 13.8703 20.53 15.3503 18.41 16.4103L9.85001 20.6903C7.91001 21.6603 6.47001 22.0003 5.41001 22.0003ZM5.41001 4.00027C4.87001 4.00027 4.45001 4.13027 4.19001 4.39027C3.46001 5.11027 3.75001 6.98027 4.95001 9.37027L5.82001 11.1103C6.14001 11.7603 6.14001 12.7403 5.82001 13.3903L4.95001 15.1203C3.75001 17.5203 3.46001 19.3803 4.19001 20.1003C4.91001 20.8303 6.78001 20.5403 9.18001 19.3403L17.74 15.0603C19.31 14.2803 20.2 13.2503 20.2 12.2403C20.2 11.2303 19.3 10.2003 17.73 9.42027L9.17001 5.15027C7.65001 4.39027 6.34001 4.00027 5.41001 4.00027Z" fill="#292D32"/>
         <path d="M10.84 13.0002H5.44C5.03 13.0002 4.69 12.6602 4.69 12.2502C4.69 11.8402 5.03 11.5002 5.44 11.5002H10.84C11.25 11.5002 11.59 11.8402 11.59 12.2502C11.59 12.6602 11.25 13.0002 10.84 13.0002Z" fill="#292D32"/>
         </svg>
                     </span>
                   </button>
                 </form>
               </div>
             </div>
             <div className='w-[1130px] h-[82.8px] ms-[10px]'>
               <div className='w-[1130px] h-[58.8px] pt-[8px] mb-[24px] border-t-[0.8px] border-t-[rgba(51,51,51)] flex '>
                 <div className='w-[40px] h-[32px] pe-[8px]'>
                   <div className='w-[32px] h-[32px] bgactors'></div>
                 </div>
                 <div className='w-[1090px] h-[50px]'>
                   <div className='w-[1090px] h-[26px] mb-[4px] '>
                     <span className='w-[33.29px] h-[20px] me-[8px] font-bold text-[14px] text-white inline-block'>فیلیمو</span>
                     <span className=' numfont text-[rgba(189,189,189)] text-[12px]'>1 مرداد 1403</span>
                     <div className='w-[92.69px] h-[26px] float-left '>
                       <span className='flex'>
                         <button className='w-[49.91px] h-[26px] px-[4px] py-[1px] numfont float-right text-[rgba(208,208,208)]  flex items-start'>
                           <span className='w-[12.89px] h-[20px] text-[14px] text-center'>0+</span>
                           <span className='w-[24px] h-[24px] '>
                             <span className='bi bi-hand-thumbs-up-fill'></span>
                           </span>
                         </button>
                         <button className='w-[42.78px] h-[26px] px-[4px] py-[1px] numfont text-[rgba(208,208,208)] flex items-start'>
                           <span className='w-[5.75px] h-[20px] text-center'>0</span>
                           <span className='w-[24px] h-[24px] text-center'>
                             <span className='bi bi-hand-thumbs-down-fill text-center'></span>
                           </span>
                         </button>
                       </span>
                     </div>
                   </div>
                   <div className='w-[1090px] h-[20px]'>
                     <p className='text-[rgba(246,246,246)] text-[12px] font-normal'>ما دیدگاهت را به تیم ساخت و انتخاب فیلم و سریال ها، مستقیما منتقل می کنیم.</p>
                   </div>
                 </div>
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

export default Negahbaneshab