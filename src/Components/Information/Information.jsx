import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./info.css";
import { useCreateItemMutation } from "../../Redux/Login/Login";
import Img1 from "../../Image/Icon/filimo_150.png"
import Img2 from "../../Image/Icon/filimo_logo_type_fa.svg"
import Img3 from "../../Image/Icon/download.svg"
import Img4 from "../../Image/Icon/b55ea42e5d36a0ddec8dde0fab0cfd28.png"

function Information() {
  const [phonenumber, setPhonenumber] = useState("");
  const [islistopen, setIslistopen] = useState(false);
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    const AddPerson = async () => {
      try {
        let data = await fetch(
          "https://66471c4751e227f23ab11ce9.mockapi.io/login",
          {
            method: "POST",
            phonenumber
          }
        );
        let res = data.json();
        console.log(res);
      } catch (error) {
        console.log(error.message);
      }
    };
    AddPerson();
    navigate("/");
  };
  const homapage = () => {
    navigate("/");
  };
  const togglelist = () => {
    setIslistopen(!islistopen);
  };

  return (
    <>
      <div className="w-[100%] h-[100%] bg-white pb-[50px]">
        <div className="w-[100%] flex flex-col items-center  body ">
          <div className="w-[7.5%] flex justify-center py-14 ">
            <a
              href="#"
              className="w-[100%] text-center "
              onClick={() => homapage()}
            >
              <div className="flex items-center grayscale">
                <img
                  src={Img1}
                  className="w-[31.81px] h-[35px] inline-block text-gray-900 "
                  alt=""
                />
                <img
                  src={Img2}
                  alt=""
                  className="w-[71.74px] h-[25px] ms-[10px] contrast-0"
                />
              </div>
            </a>
          </div>
          <div className="w-[30%] text-center font-bold">
            <h3>ورود یا ثبت نام در فیلیمو</h3>
          </div>
          <div className="w-[30%] text-[#666666] text-[14px] flex flex-row items-center pt-7 pb-3 font-bold">
            <a
              href="#"
              onClick={() => homapage()}
              className="flex items-center bazgasht"
            >
              <span className="text-[22px] block mt-2 btm">
                <span className="bi bi-arrow-right-short"></span>
              </span>
              <p className="">بازگشت</p>
            </a>
          </div>
          <div className="w-[100%] flex justify-center">
            <div className="w-[29%] rounded-2xl border-2 border-[#F3F3F3]">
              <form action="#" method="POST" onSubmit={(e) => submitHandler(e)}>
                <div className="w-[100%] p-8">
                  <p className="text-[14px] pb-6">
                    برای ورود و یا ثبت نام، اطلاعات کاربری خود را وارد کنید.
                  </p>
                  <label
                    htmlFor="username"
                    className="relative z-[10] flex flex-row border-2 rounded-lg "
                  >
                    <img
                      src={Img3}
                      alt="username"
                      className="ps-2 w-[8%]"
                    />
                    <input
                      type="tel"
                      placeholder="موبایل"
                      onChange={(e) => setPhonenumber(e.target.value)}
                      className=" w-full py-3 px-1 text-black text-end rounded-lg border-none outline-none"
                      id="username"
                    />
                  </label>
                  <button className="w-full rounded-lg bg-[#00AC50] py-3 text-white mt-3 hover:bg-[#2e9c61] transition duration-300">
                    ادامه
                  </button>
                </div>
                <div className="w-[100%] pb-3 flex items-center justify-between">
                  <div className="w-[47%] border-[.3px] border-[#F0F0F0]"></div>
                  یا
                  <div className="w-[47%] border-[.3px] border-[#F0F0F0]"></div>
                </div>
                <div className="w-[100%] px-5 pt-5 pb-10">
                  <button className="w-full py-2 border border-[#dad8d8] rounded-md flex justify-end items-center hover:bg-[#dbeafea3] hover:border-blue-200 ease-in duration-200 ">
                    <div className="text-center w-[92%]">
                      <p className="font-bold text-[14px]">
                        Continue with Google
                      </p>
                    </div>
                    <img
                      src={Img4}
                      alt=""
                      className="w-[5%] me-2"
                    />
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="w-[100%] p-5 flex justify-center">
            <div className="w-[30%]">
              <button
                className="w-[12%] flex items-center text-[#666666]"
                onClick={togglelist}
              >
                <span className="bi bi-headphones me-1 pt-1"></span>پشتیبانی{" "}
                <span
                  className={`bi bi-caret-down-fill ${
                    islistopen ? "origin-center rotate-180 " : ""
                  } transition  text-[10px] ps-1 pt-1`}
                ></span>
              </button>
              {islistopen && (
                <div
                  className={`w-[43%] overflow-hidden transition-max-height duration-300`}
                >
                  <div className="w-[100%] pt-3">
                    <ul className="list-inside w-[100%] border-r-2 border-r-[#CACACA] ps-2 p-0 block">
                      <li className="text-[13px] text-[#666666] p-0 m-0 block">
                        <span className="bi bi-envelope-fill text-[14px]"></span>{" "}
                        ایمیل:{" "}
                        <a
                          href="#"
                          className="text-[#CD7500] inline-block my-2"
                        >
                          payment@filimo.com
                        </a>
                      </li>
                      <li className="text-[13px] text-[#666666] block p-0 m-0">
                        <span className="bi bi-telephone-fill text-[14px]"></span>{" "}
                        شماره تلفن:{" "}
                        <a
                          href="#"
                          className="text-[#CD7500] inline-block my-2"
                        >
                          74524(021)
                        </a>
                      </li>
                      <li className="text-[13px] text-[#666666] block p-0 m-0">
                        <span className="bi bi-question-circle-fill text-[15px]"></span>{" "}
                        <a
                          href="#"
                          className="text-[#CD7500] inline-block font-bold ms-3 pb-1"
                        >
                          پرسش های متداول
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Information;
{
  /* <div className='w-[40%] mt-32 bg-[#133039] shadow-2xl rounded-lg p-3'>
    <div className='w-[100%] text-center'>
        <span className='bi bi-person-plus-fill text-gray-300 text-[65px] me-2'></span>
        <span className='text-gray-300 text-[35px]'>Persone Info</span>
    </div>
    <form action="#" method='post'  onSubmit={(e)=>submitHandler(e)}>
        <div className='mb-4'>
        <label htmlFor="fullname" className='block text-white text-lg mb-2'>FullName</label>
        <input type="text" id='fullname' placeholder='FullName...!' className='shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-1 focus:shadow-outline' onChange={(e)=>setName(e.target.value)} />
        </div>
        <div className='mb-4'>
        <label htmlFor="email" className='block text-white text-lg mb-2'>Email</label>
        <input type="email" id='email' placeholder='Email...!' className='shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-1 focus:shadow-outline' onChange={(e)=>setEmail(e.target.value)}  />
        </div>
        <div className='mb-4'>
        <label htmlFor="username" className='block text-white text-lg mb-2'>Username</label>
        <input type="text" id='username' placeholder='Username...!' className='shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-1 focus:shadow-outline' onChange={(e)=>setUsername(e.target.value)} />
        </div>
        <div className='mb-4'>
        <label htmlFor="password" className='block text-white text-lg mb-2'>Password</label>
        <input type="password" id='fullname' placeholder='Password...!' className='shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-1 focus:shadow-outline' onChange={(e)=>setPassword(e.target.value)} />
        </div>
        <div className='mb-4'>
            <button className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Add Person</button>
        </div>
    </form>
</div> */
}
