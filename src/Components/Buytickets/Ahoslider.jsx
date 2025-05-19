import React from "react";
import Slider from "react-slick";
import "../../Css/item.css";
import "./buyticets.css";
import Img1 from "../../Image/Buytickets/Aho/mov_4345_1-b.webp"
import Img2 from "../../Image/Buytickets/Aho/mov_2619_162952.webp"
import Img3 from "../../Image/Buytickets/Aho/mov_4897_66200.webp"
import Img4 from "../../Image/Buytickets/Aho/mov_9743_165174.webp"
import Img5 from "../../Image/Buytickets/Aho/mov_9590_163363.webp"
import Img6 from "../../Image/Buytickets/Aho/mov_112338_61440.webp"
import Img7 from "../../Image/Buytickets/Aho/mov_89320_615-b.webp"
import Img8 from "../../Image/Buytickets/Aho/mov_82408_191-b.webp"
import Img9 from "../../Image/Buytickets/Aho/mov_89414_481-b.webp"
import Img10 from "../../Image/Buytickets/Aho/mov_87154_164034.webp"
import Img11 from "../../Image/Buytickets/Aho/mov_19709_165259.webp"
import Img12 from "../../Image/Buytickets/Aho/mov_139034_163475.webp"
import Img13 from "../../Image/Buytickets/Aho/mov_7772_163737.webp"
import Img14 from "../../Image/Buytickets/Aho/mov_13901_163612.webp"
import Img15 from "../../Image/Buytickets/Aho/mov_112459_163189.webp"

function Ahoslider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {/* -------slide1------ */}

        <div className="w-[228px] h-[341.08px] px-[4px] relative">
          <a href="#" className="w-[220px] h-[319.48px] pt-[10px]">
            <div className="w-[220px] h-[309.48px] ahoslider">
              <div className="w-[220px] h-[293.475px] mb-[16px]  ">
                <img
                  src={Img1}
                  className="rounded-[4px] w-[220px]  "
                  alt=""
                />
              </div>
              <div className="w-[220px] h-[293.48px] numfont absolute top-[0%] items-end text-end text-white bg-[#292929b3] ahohover">
                <div className="w-[220px] h-[91.02px] p-[4px] ">
                  <div className="w-[212px] h-[24px] mb-[8px] flex justify-end ">
                    <div className="w-[64.06px] h-[20px] mt-[4px] me-[4px] flex justify-end rounded-[510px] ">
                      <div className="bg-[#727474]   rounded-l-[510px] p-1">
                        <div className="mt-[1px] text-[9px]">3.4/10</div>
                      </div>
                      <div className="w-[28px] h-[20px] bg-[#878684] text-start rounded-r-[510px]">
                        <div className="w-[18px] h-[16px] text-[11px] mt-[4px] ">
                          Imdb
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[212px] h-[17.6px] mb-[8px] text-[12px]">
                    درام - خانوادگی
                  </div>
                  <div className="w-[212px] h-[17.6px] mb-[8px] text-[12px]">
                    ایران - 1394
                  </div>
                </div>
              </div>
            </div>
          </a>
          <div className="w-[220px] h-[21.6px]">
            <a href="#" className="w-[220px] h-[21.6px] ps-[32px] flex">
              <div className="w-[188px] h-[21.6px] pb-[4px] text-white text-end text-[13px] font-bold">
                سایه
              </div>
            </a>
          </div>
        </div>
        {/* -------end slide1------ */}
        {/* -------slide2------ */}

        <div className="w-[228px] h-[341.08px] px-[4px] relative">
          <a href="#" className="w-[220px] h-[319.48px] pt-[10px]">
            <div className="w-[220px] h-[309.48px] ahoslider">
              <div className="w-[220px] h-[293.475px] mb-[16px]  ">
                <img
                  src={Img2}
                  className="rounded-[4px] w-[220px]  "
                  alt=""
                />
              </div>
              <div className="w-[220px] h-[293.48px]  numfont absolute top-[0%] items-end text-end text-white bg-[#292929b3] ahohover">
                <div className="w-[220px] h-[91.02px] p-[4px] ">
                  <div className="w-[212px] h-[24px] mb-[8px] flex justify-end ">
                    <div className="w-[64.06px] h-[20px] mt-[4px] me-[4px] flex justify-end rounded-[510px] ">
                      <div className="bg-[#727474]  rounded-l-[510px] p-1">
                        <div className="mt-[1px] text-[9px]">7.2/10</div>
                      </div>
                      <div className="w-[28px] h-[20px] bg-[#878684] text-start rounded-r-[510px]">
                        <div className="w-[18px] h-[16px] text-[11px] mt-[4px] ">
                          Imdb
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[212px] h-[17.6px] mb-[8px] text-[12px]">
                    درام - خانوادگی
                  </div>
                  <div className="w-[212px] h-[17.6px] mb-[8px] text-[12px]">
                    ایران - زیرنویس دارد - 1390
                  </div>
                </div>
              </div>
            </div>
          </a>
          <div className="w-[220px] h-[21.6px]">
            <a href="#" className="w-[220px] h-[21.6px] ps-[32px] flex">
              <div className="w-[188px] h-[21.6px] pb-[4px] text-white text-end text-[13px] font-bold">
                پله آخر
              </div>
            </a>
          </div>
        </div>
        {/* -------end slide2------ */}
        {/* -------slide3------ */}

        <div className="w-[228px] h-[341.08px] px-[4px] relative">
          <a href="#" className="w-[220px] h-[319.48px] pt-[10px]">
            <div className="w-[220px] h-[309.48px] ahoslider">
              <div className="w-[220px] h-[293.475px] mb-[16px]  ">
                <img
                  src={Img3}
                  className="rounded-[4px] w-[220px]  "
                  alt=""
                />
              </div>
              <div className="w-[220px] h-[293.48px] numfont absolute top-[0%] items-end text-end text-white bg-[#292929b3] ahohover">
                <div className="w-[220px] h-[91.02px] p-[4px] ">
                  <div className="w-[212px] h-[24px]  mb-[8px] flex justify-end ">
                    <div className="w-[64.06px] h-[20px] mt-[4px] me-[4px] flex justify-end rounded-[510px] ">
                      <div className="bg-[#727474]   rounded-l-[510px] p-1">
                        <div className="mt-[1px] text-[9px]">5.9/10</div>
                      </div>
                      <div className="w-[28px] h-[20px] bg-[#878684] text-start rounded-r-[510px]">
                        <div className="w-[18px] h-[16px] text-[11px] mt-[4px] ">
                          Imdb
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[212px] h-[17.6px] mb-[8px] text-[12px]">
                    درام - خانوادگی
                  </div>
                  <div className="w-[212px] h-[17.6px] mb-[8px] text-[12px]">
                    1394 - ایران - زیرنویس دارد
                  </div>
                </div>
              </div>
            </div>
          </a>
          <div className="w-[220px] h-[21.6px]">
            <a href="#" className="w-[220px] h-[21.6px] ps-[32px] flex">
              <div className="w-[188px] h-[21.6px] pb-[4px] text-white text-end text-[13px] font-bold">
                کفش هایم کو
              </div>
            </a>
          </div>
        </div>
        {/* -------end slide3------ */}
        {/* -------slide4------ */}

        <div className="w-[228px] h-[341.08px] px-[4px] relative">
          <a href="#" className="w-[220px] h-[319.48px] pt-[10px]">
            <div className="w-[220px] h-[309.48px] ahoslider">
              <div className="w-[220px] h-[293.475px] mb-[16px]  ">
                <img
                  src={Img4}
                  className="rounded-[4px] w-[220px]  "
                  alt=""
                />
              </div>
              <div className="w-[220px] h-[293.48px] numfont absolute top-[0%] items-end text-end text-white bg-[#292929b3] ahohover">
                <div className="w-[220px] h-[91.02px] p-[4px] ">
                  <div className="w-[212px] h-[24px] mb-[8px] flex justify-end ">
                    <div className="w-[64.06px] h-[20px] mt-[4px] me-[4px] flex justify-end rounded-[510px] ">
                      <div className="bg-[#727474]   rounded-l-[510px] p-1">
                        <div className="mt-[1px] text-[9px]">6.3/10</div>
                      </div>
                      <div className="w-[28px] h-[20px] bg-[#878684] text-start rounded-r-[510px]">
                        <div className="w-[18px] h-[16px] text-[11px] mt-[4px] ">
                          Imdb
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[212px] h-[17.6px] mb-[8px] text-[12px]">
                    درام - خانوادگی
                  </div>
                  <div className="w-[212px] h-[17.6px] mb-[8px] text-[12px]">
                    1394 - ایران - زیرنویس دارد
                  </div>
                </div>
              </div>
            </div>
          </a>
          <div className="w-[220px] h-[21.6px]">
            <a href="#" className="w-[220px] h-[21.6px] ps-[32px] flex">
              <div className="w-[188px] h-[21.6px] pb-[4px] text-white text-end text-[13px] font-bold">
                وارونگی
              </div>
            </a>
          </div>
        </div>
        {/* -------end slide4------ */}
        {/* -------slide5------ */}

        <div className="w-[228px] h-[341.08px] px-[4px] relative">
          <a href="#" className="w-[220px] h-[319.48px] pt-[10px]">
            <div className="w-[220px] h-[309.48px] ahoslider">
              <div className="w-[220px] h-[293.475px] mb-[16px]  ">
                <img
                  src={Img5}
                  className="rounded-[4px] w-[220px]  "
                  alt=""
                />
              </div>
              <div className="w-[220px] h-[293.48px] numfont absolute top-[0%] items-end text-end text-white bg-[#292929b3] ahohover">
                <div className="w-[220px] h-[91.02px] p-[4px] ">
                  <div className="w-[212px] h-[24px] mb-[8px] flex justify-end ">
                    <div className="w-[64.06px] h-[20px] mt-[4px] me-[4px] flex justify-end rounded-[510px] ">
                      <div className="bg-[#727474]   rounded-l-[510px] p-1">
                        <div className="mt-[1px] text-[9px]">6.8/10</div>
                      </div>
                      <div className="w-[28px] h-[20px] bg-[#878684] text-start rounded-r-[510px]">
                        <div className="w-[18px] h-[16px] text-[11px] mt-[4px] ">
                          Imdb
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[212px] h-[17.6px] mb-[8px] text-[12px]">
                    درام - خانوادگی
                  </div>
                  <div className="w-[212px] h-[17.6px] mb-[8px] text-[12px]">
                    1381 - ایران - زیرنویس دارد
                  </div>
                </div>
              </div>
            </div>
          </a>
          <div className="w-[220px] h-[21.6px]">
            <a href="#" className="w-[220px] h-[21.6px] ps-[32px] flex">
              <div className="w-[188px] h-[21.6px] pb-[4px] text-white text-end text-[13px] font-bold">
                فرش باد
              </div>
            </a>
          </div>
        </div>
        {/* -------end slide5------ */}
        {/* -------slide6------ */}

        <div className="w-[228px] h-[341.08px] px-[4px] relative">
          <a href="#" className="w-[220px] h-[319.48px] pt-[10px]">
            <div className="w-[220px] h-[309.48px] ahoslider">
              <div className="w-[220px] h-[293.475px] mb-[16px]  ">
                <img
                  src={Img6}
                  className="rounded-[4px] w-[220px]  "
                  alt=""
                />
              </div>
              <div className="w-[220px] h-[293.48px] numfont absolute top-[0%] items-end text-end text-white bg-[#292929b3] ahohover">
                <div className="w-[220px] h-[91.02px] p-[4px] ">
                  <div className="w-[212px] h-[24px] mb-[8px] flex justify-end ">
                    <div className="w-[64.06px] h-[20px] mt-[4px] me-[4px] flex justify-end rounded-[510px] ">
                      <div className="bg-[#727474]   rounded-l-[510px] p-1">
                        <div className="mt-[1px] text-[9px]">6.5/10</div>
                      </div>
                      <div className="w-[28px] h-[20px] bg-[#878684] text-start rounded-r-[510px]">
                        <div className="w-[18px] h-[16px] text-[11px] mt-[4px] ">
                          Imdb
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[212px] h-[17.6px] mb-[8px] text-[12px]">
                    درام - خانوادگی
                  </div>
                  <div className="w-[212px] h-[17.6px] mb-[8px] text-[12px]">
                    1384 - ایران
                  </div>
                </div>
              </div>
            </div>
          </a>
          <div className="w-[220px] h-[21.6px]">
            <a href="#" className="w-[220px] h-[21.6px] ps-[32px] flex">
              <div className="w-[188px] h-[21.6px] pb-[4px] text-white text-end text-[13px] font-bold">
                فرش باد
              </div>
            </a>
          </div>
        </div>
        {/* -------end slide6------ */}
        {/* -------slide7------ */}

        <div className="w-[228px] h-[341.08px] px-[4px] relative">
          <a href="#" className="w-[220px] h-[319.48px] pt-[10px]">
            <div className="w-[220px] h-[309.48px] ahoslider">
              <div className="w-[220px] h-[293.475px] mb-[16px]  ">
                <img
                  src={Img7}
                  className="rounded-[4px] w-[220px]  "
                  alt=""
                />
              </div>
              <div className="w-[220px] h-[293.48px] numfont absolute top-[0%] items-end text-end text-white bg-[#292929b3] ahohover">
                <div className="w-[220px] h-[91.02px] p-[4px] ">
                  <div className="w-[212px] h-[24px] mb-[8px] flex justify-end ">
                    <div className="w-[64.06px] h-[20px] mt-[4px] me-[4px] flex justify-end rounded-[510px] ">
                      <div className="bg-[#727474]   rounded-l-[510px] p-1">
                        <div className="mt-[1px] text-[9px]">2.3/10</div>
                      </div>
                      <div className="w-[28px] h-[20px] bg-[#878684] text-start rounded-r-[510px]">
                        <div className="w-[18px] h-[16px] text-[11px] mt-[4px] ">
                          Imdb
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[212px] h-[17.6px] mb-[8px] text-[12px]">
                    درام - خانوادگی
                  </div>
                  <div className="w-[212px] h-[17.6px] mb-[8px] text-[12px]">
                    1399 - ایران
                  </div>
                </div>
              </div>
            </div>
          </a>
          <div className="w-[220px] h-[21.6px]">
            <a href="#" className="w-[220px] h-[21.6px] ps-[32px] flex">
              <div className="w-[188px] h-[21.6px] pb-[4px] text-white text-end text-[13px] font-bold">
                قایقران
              </div>
            </a>
          </div>
        </div>
        {/* -------end slide7------ */}
        {/* -------slide8------ */}

        <div className="w-[228px] h-[341.08px] px-[4px] relative">
          <a href="#" className="w-[220px] h-[319.48px] pt-[10px]">
            <div className="w-[220px] h-[309.48px] ahoslider">
              <div className="w-[220px] h-[293.475px] mb-[16px]  ">
                <img
                  src={Img8}
                  className="rounded-[4px] w-[220px]  "
                  alt=""
                />
              </div>
              <div className="w-[220px] h-[293.48px] numfont absolute top-[0%] items-end text-end text-white bg-[#292929b3] ahohover">
                <div className="w-[220px] h-[91.02px] p-[4px] ">
                  <div className="w-[212px] h-[24px] mb-[8px] flex justify-end ">
                    <div className="w-[64.06px] h-[20px] mt-[4px] me-[4px] flex justify-end rounded-[510px] ">
                      <div className="bg-[#727474]   rounded-l-[510px] p-1">
                        <div className="mt-[1px] text-[9px]">4.1/10</div>
                      </div>
                      <div className="w-[28px] h-[20px] bg-[#878684] text-start rounded-r-[510px]">
                        <div className="w-[18px] h-[16px] text-[11px] mt-[4px] ">
                          Imdb
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[212px] h-[17.6px] mb-[8px] text-[12px]">
                    درام - خانوادگی
                  </div>
                  <div className="w-[212px] h-[17.6px] mb-[8px] text-[12px]">
                    1399 - ایران
                  </div>
                </div>
              </div>
            </div>
          </a>
          <div className="w-[220px] h-[21.6px]">
            <a href="#" className="w-[220px] h-[21.6px] ps-[32px] flex">
              <div className="w-[188px] h-[21.6px] pb-[4px] text-white text-end text-[13px] font-bold">
                زیر نور کم
              </div>
            </a>
          </div>
        </div>
        {/* -------end slide8------ */}
        {/* -------slide9------ */}

        <div className="w-[228px] h-[341.08px] px-[4px] relative">
          <a href="#" className="w-[220px] h-[319.48px] pt-[10px]">
            <div className="w-[220px] h-[309.48px] ahoslider">
              <div className="w-[220px] h-[293.475px] mb-[16px]  ">
                <img
                  src={Img9}
                  className="rounded-[4px] w-[220px]  "
                  alt=""
                />
              </div>
              <div className="w-[220px] h-[293.48px] numfont absolute top-[0%] items-end text-end text-white bg-[#292929b3] ahohover">
                <div className="w-[220px] h-[91.02px] p-[4px] ">
                  <div className="w-[212px] h-[24px] mb-[8px] flex justify-end ">
                    <div className="w-[64.06px] h-[20px] mt-[4px] me-[4px] flex justify-end rounded-[510px] "></div>
                  </div>
                  <div className="w-[212px] h-[17.6px] mb-[8px] text-[12px]">
                    درام - خانوادگی
                  </div>
                  <div className="w-[212px] h-[17.6px] mb-[8px] text-[12px]">
                    1398 - ایران
                  </div>
                </div>
              </div>
            </div>
          </a>
          <div className="w-[220px] h-[21.6px]">
            <a href="#" className="w-[220px] h-[21.6px] ps-[32px] flex">
              <div className="w-[188px] h-[21.6px] pb-[4px] text-white text-end text-[13px] font-bold">
                بوی عطر مردانه
              </div>
            </a>
          </div>
        </div>
        {/* -------end slide9------ */}
        {/* -------slide10------ */}

        <div className="w-[228px] h-[341.08px] px-[4px] relative">
          <a href="#" className="w-[220px] h-[319.48px] pt-[10px]">
            <div className="w-[220px] h-[309.48px] ahoslider">
              <div className="w-[220px] h-[293.475px] mb-[16px]  ">
                <img
                  src={Img10}
                  className="rounded-[4px] w-[220px]  "
                  alt=""
                />
              </div>
              <div className="w-[220px] h-[293.48px] numfont absolute top-[0%] items-end text-end text-white bg-[#292929b3] ahohover">
                <div className="w-[220px] h-[91.02px] p-[4px] ">
                  <div className="w-[212px] h-[24px] mb-[8px] flex justify-end ">
                    <div className="w-[64.06px] h-[20px] mt-[4px] me-[4px] flex justify-end rounded-[510px] ">
                      <div className="bg-[#727474]   rounded-l-[510px] p-1">
                        <div className="mt-[1px] text-[9px]">5.1/10</div>
                      </div>
                      <div className="w-[28px] h-[20px] bg-[#878684] text-start rounded-r-[510px]">
                        <div className="w-[18px] h-[16px] text-[11px] mt-[4px] ">
                          Imdb
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[212px] h-[17.6px] mb-[8px] text-[12px]">
                    درام - خانوادگی
                  </div>
                  <div className="w-[212px] h-[17.6px] mb-[8px] text-[12px]">
                    1391 - ایران
                  </div>
                </div>
              </div>
            </div>
          </a>
          <div className="w-[220px] h-[21.6px]">
            <a href="#" className="w-[220px] h-[21.6px] ps-[32px] flex">
              <div className="w-[188px] h-[21.6px] pb-[4px] text-white text-end text-[13px] font-bold">
                بی عنوان
              </div>
            </a>
          </div>
        </div>
        {/* -------end slide10------ */}
        {/* -------slide11------ */}

        <div className="w-[228px] h-[341.08px] px-[4px] relative">
          <a href="#" className="w-[220px] h-[319.48px] pt-[10px]">
            <div className="w-[220px] h-[309.48px] ahoslider">
              <div className="w-[220px] h-[293.475px] mb-[16px]  ">
                <img
                  src={Img11}
                  className="rounded-[4px] w-[220px]  "
                  alt=""
                />
              </div>
              <div className="w-[220px] h-[293.48px] numfont absolute top-[0%] items-end text-end text-white bg-[#292929b3] ahohover">
                <div className="w-[220px] h-[91.02px] p-[4px] ">
                  <div className="w-[212px] h-[24px] mb-[8px] flex justify-end ">
                    <div className="w-[64.06px] h-[20px] mt-[4px] me-[4px] flex justify-end rounded-[510px] ">
                      <div className="bg-[#727474]   rounded-l-[510px] p-1">
                        <div className="mt-[1px] text-[9px]">6.1/10</div>
                      </div>
                      <div className="w-[28px] h-[20px] bg-[#878684] text-start rounded-r-[510px]">
                        <div className="w-[18px] h-[16px] text-[11px] mt-[4px] ">
                          Imdb
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[212px] h-[17.6px] mb-[8px] text-[12px]">
                    کمدی - جنایی
                  </div>
                  <div className="w-[212px] h-[17.6px] mb-[8px] text-[12px]">
                    1396 - ایران - زیرنویس دارد
                  </div>
                </div>
              </div>
            </div>
          </a>
          <div className="w-[220px] h-[21.6px]">
            <a href="#" className="w-[220px] h-[21.6px] ps-[32px] flex">
              <div className="w-[188px] h-[21.6px] pb-[4px] text-white text-end text-[13px] font-bold">
                خوک
              </div>
            </a>
          </div>
        </div>
        {/* -------end slide11------ */}
        {/* -------slide12------ */}

        <div className="w-[228px] h-[341.08px] px-[4px] relative">
          <a href="#" className="w-[220px] h-[319.48px] pt-[10px]">
            <div className="w-[220px] h-[309.48px] ahoslider">
              <div className="w-[220px] h-[293.475px] mb-[16px]  ">
                <img
                  src={Img12}
                  className="rounded-[4px] w-[220px]  "
                  alt=""
                />
              </div>
              <div className="w-[220px] h-[293.48px] numfont absolute top-[0%] items-end text-end text-white bg-[#292929b3] ahohover">
                <div className="w-[220px] h-[91.02px] p-[4px] ">
                  <div className="w-[212px] h-[24px] mb-[8px] flex justify-end ">
                    <div className="w-[64.06px] h-[20px] mt-[4px] me-[4px] flex justify-end rounded-[510px] ">
                      <div className="bg-[#727474]   rounded-l-[510px] p-1">
                        <div className="mt-[1px] text-[9px]">6.2/10</div>
                      </div>
                      <div className="w-[28px] h-[20px] bg-[#878684] text-start rounded-r-[510px]">
                        <div className="w-[18px] h-[16px] text-[11px] mt-[4px] ">
                          Imdb
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[212px] h-[17.6px] mb-[8px] text-[12px]">
                    درام - رازآلود
                  </div>
                  <div className="w-[212px] h-[17.6px] mb-[8px] text-[12px]">
                    1399 - ایران - چک
                  </div>
                </div>
              </div>
            </div>
          </a>
          <div className="w-[220px] h-[21.6px]">
            <a href="#" className="w-[220px] h-[21.6px] ps-[32px] flex">
              <div className="w-[188px] h-[21.6px] pb-[4px] text-white text-end text-[13px] font-bold">
                نبودن
              </div>
            </a>
          </div>
        </div>
        {/* -------end slide12------ */}
        {/* -------slide13------ */}

        <div className="w-[228px] h-[341.08px] px-[4px] relative">
          <a href="#" className="w-[220px] h-[319.48px] pt-[10px]">
            <div className="w-[220px] h-[309.48px] ahoslider">
              <div className="w-[220px] h-[293.475px] mb-[16px]  ">
                <img
                  src={Img13}
                  className="rounded-[4px] w-[220px]  "
                  alt=""
                />
              </div>
              <div className="w-[220px] h-[293.48px] numfont absolute top-[0%] items-end text-end text-white bg-[#292929b3] ahohover">
                <div className="w-[220px] h-[91.02px] p-[4px] ">
                  <div className="w-[212px] h-[24px] mb-[8px] flex justify-end ">
                    <div className="w-[64.06px] h-[20px] mt-[4px] me-[4px] flex justify-end rounded-[510px] ">
                      <div className="bg-[#727474]   rounded-l-[510px] p-1">
                        <div className="mt-[1px] text-[9px]">7.1/10</div>
                      </div>
                      <div className="w-[28px] h-[20px] bg-[#878684] text-start rounded-r-[510px]">
                        <div className="w-[18px] h-[16px] text-[11px] mt-[4px] ">
                          Imdb
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[212px] h-[17.6px] mb-[8px] text-[12px]">
                    کمدی - درام
                  </div>
                  <div className="w-[212px] h-[17.6px] mb-[8px] text-[12px]">
                    1390 - ایران - زیرنویس دارد
                  </div>
                </div>
              </div>
            </div>
          </a>
          <div className="w-[220px] h-[21.6px]">
            <a href="#" className="w-[220px] h-[21.6px] ps-[32px] flex">
              <div className="w-[188px] h-[21.6px] pb-[4px] text-white text-end text-[13px] font-bold">
                یه حبه قند
              </div>
            </a>
          </div>
        </div>
        {/* -------end slide13------ */}
        {/* -------slide14------ */}

        <div className="w-[228px] h-[341.08px] px-[4px] relative">
          <a href="#" className="w-[220px] h-[319.48px] pt-[10px]">
            <div className="w-[220px] h-[309.48px] ahoslider">
              <div className="w-[220px] h-[293.475px] mb-[16px]  ">
                <img
                  src={Img14}
                  className="rounded-[4px] w-[220px]  "
                  alt=""
                />
              </div>
              <div className="w-[220px] h-[293.48px] numfont absolute top-[0%] items-end text-end text-white bg-[#292929b3] ahohover">
                <div className="w-[220px] h-[91.02px] p-[4px] ">
                  <div className="w-[212px] h-[24px] mb-[8px] flex justify-end ">
                    <div className="w-[64.06px] h-[20px] mt-[4px] me-[4px] flex justify-end rounded-[510px] ">
                      <div className="bg-[#727474]   rounded-l-[510px] p-1">
                        <div className="mt-[1px] text-[9px]">5.6/10</div>
                      </div>
                      <div className="w-[28px] h-[20px] bg-[#878684] text-start rounded-r-[510px]">
                        <div className="w-[18px] h-[16px] text-[11px] mt-[4px] ">
                          Imdb
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[212px] h-[17.6px] mb-[8px] text-[12px]">
                    {" "}
                    درام
                  </div>
                  <div className="w-[212px] h-[17.6px] mb-[8px] text-[12px]">
                    1395 - ایران
                  </div>
                </div>
              </div>
            </div>
          </a>
          <div className="w-[220px] h-[21.6px]">
            <a href="#" className="w-[220px] h-[21.6px] ps-[32px] flex">
              <div className="w-[188px] h-[21.6px] pb-[4px] text-white text-end text-[13px] font-bold">
                تابستان داغ
              </div>
            </a>
          </div>
        </div>
        {/* -------end slide14------ */}
        {/* -------slide15------ */}

        <div className="w-[228px] h-[341.08px] px-[4px] relative">
          <a href="#" className="w-[220px] h-[319.48px] pt-[10px]">
            <div className="w-[220px] h-[309.48px] ahoslider">
              <div className="w-[220px] h-[293.475px] mb-[16px]  ">
                <img
                  src={Img15}
                  className="rounded-[4px] w-[220px]  "
                  alt=""
                />
              </div>
              <div className="w-[220px] h-[293.48px] numfont absolute top-[0%] items-end text-end text-white bg-[#292929b3] ahohover">
                <div className="w-[220px] h-[91.02px] p-[4px] ">
                  <div className="w-[212px] h-[24px] mb-[8px] flex justify-end ">
                    <div className="w-[64.06px] h-[20px] mt-[4px] me-[4px] flex justify-end rounded-[510px] ">
                      <div className="bg-[#727474]   rounded-l-[510px] p-1">
                        <div className="mt-[1px] text-[9px]">9.0/10</div>
                      </div>
                      <div className="w-[28px] h-[20px] bg-[#878684] text-start rounded-r-[510px]">
                        <div className="w-[18px] h-[16px] text-[11px] mt-[4px] ">
                          Imdb
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[212px] h-[17.6px] mb-[8px] text-[12px]">
                    مستند - ورزشی
                  </div>
                  <div className="w-[212px] h-[17.6px] mb-[8px] text-[12px]">
                    1398 - ایران
                  </div>
                </div>
              </div>
            </div>
          </a>
          <div className="w-[220px] h-[21.6px]">
            <a href="#" className="w-[220px] h-[21.6px] ps-[32px] flex">
              <div className="w-[188px] h-[21.6px] pb-[4px] text-white text-end text-[13px] font-bold">
                آبی به رنگ آسمان
              </div>
            </a>
          </div>
        </div>
        {/* -------end slide15------ */}
      </Slider>
    </div>
  );
}

export default Ahoslider;
