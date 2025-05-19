import React, { useRef, useState } from "react";
import Ghotb from "../Serials/Ghotb";
import Sedato from "../Serials/Sedato";
import Oskar from "../Serials/Oskar";
import Sepanj from "../Serials/Sepanj";
import Zodiak from "../Serials/Zodiak";
import Dolfini from "../Serials/Dolfini";
import Img1 from "../../Image/posts/mov_146778_157746.webp";
import Img2 from "../../Image/posts/mov_146778_157746.webp";
import Img3 from "../../Image/posts/mov_146774_157739.webp";
import Img4 from "../../Image/posts/mov_146774_157739.webp";
import Img5 from "../../Image/posts/mov_146772_156758.webp";
import Img6 from "../../Image/posts/mov_146772_156758.webp";
import Img7 from "../../Image/posts/mov_146717_156644.webp";
import Img8 from "../../Image/posts/mov_146717_156644.webp";
import Img9 from "../../Image/posts/mov_146716_156643.webp";
import Img10 from "../../Image/posts/mov_146716_156643.webp";
import Img11 from "../../Image/posts/mov_145333_157677.webp";
import Img12 from "../../Image/posts/mov_145333_157677.webp";

function Serials() {
  const [ghotb, setGhotb] = useState(true);
  const [sedato, setSedato] = useState(false);
  const [oskar, setOskar] = useState(false);
  const [sepanj, setSepanj] = useState(false);
  const [zodiak, setZodiak] = useState(false);
  const [dolfin, setDolfin] = useState(false);
  const imageref = useRef(null);
  const scrollimages = () => {
    imageref.current.scrollIntoView({ behavior: "smooth" });
  };
  function changGH(ghotb) {
    setGhotb(!ghotb);
    setSedato(false);
    setOskar(false);
    setSepanj(false);
    setZodiak(false);
    setDolfin(false);
    scrollimages();
  }
  function changSE(sedato) {
    setSedato(!sedato);
    setGhotb(false);
    setOskar(false);
    setSepanj(false);
    setZodiak(false);
    setDolfin(false);
    scrollimages();
  }
  function changOS(oskar) {
    setOskar(!oskar);
    setGhotb(false);
    setSedato(false);
    setSepanj(false);
    setZodiak(false);
    setDolfin(false);
    scrollimages();
  }
  function changSP(sepanj) {
    setSepanj(!sepanj);
    setGhotb(false);
    setSedato(false);
    setOskar(false);
    setZodiak(false);
    setDolfin(false);
    scrollimages();
  }
  function changZD(zodiak) {
    setZodiak(!zodiak);
    setGhotb(false);
    setSedato(false);
    setOskar(false);
    setSepanj(false);
    setDolfin(false);
    scrollimages();
  }
  function changDL(dolfin) {
    setDolfin(!dolfin);
    setGhotb(false);
    setSedato(false);
    setOskar(false);
    setSepanj(false);
    setZodiak(false);
    scrollimages();
  }

  return (
    <>
      <div className="w-[100%] flex justify-evenly mt-10 flex-col md:flex-row px-10 ">
        <div className="w-[100%] flex justify-around mb-3 md:mb-0">
          {ghotb ? (
            <div
              className="w-[30%]  relative mx-3 lg:mx-0 rounded-lg flex justify-center border-2"
              onClick={() => changGH()}
            >
              <img
                src={Img1}
                className="w-[100%] rounded-lg opacity-[0.6] hover:opacity-[1]"
                alt=""
              />
              <p className="absolute hidden md:inline-block bottom-5 text-white">
                اختصاصی <span className="text-yellow-400">فیلیمو</span>
              </p>
            </div>
          ) : (
            <div
              className="w-[30%]  relative mx-3 lg:mx-0 rounded-lg flex justify-center"
              onClick={() => changGH()}
            >
              <img
                src={Img2}
                className="w-[100%] rounded-lg opacity-[0.6] hover:opacity-[1]"
                alt=""
              />
              <p className="absolute hidden md:inline-block bottom-5 text-white">
                اختصاصی <span className="text-yellow-400">فیلیمو</span>
              </p>
            </div>
          )}
          {sedato ? (
            <div
              className="w-[30%]  relative mx-3 lg:mx-0 rounded-lg flex justify-center border-2"
              onClick={() => changSE()}
            >
              <img
                src={Img3}
                className="w-[100%] rounded-lg opacity-[0.6] hover:opacity-[1]"
                alt=""
              />
              <p className="absolute hidden md:inline-block bottom-5 text-white">
                اختصاصی <span className="text-yellow-400">فیلیمو</span>
              </p>
            </div>
          ) : (
            <div
              className="w-[30%]  relative mx-3 lg:mx-0 rounded-lg flex justify-center"
              onClick={() => changSE()}
            >
              <img
                src={Img4}
                className="w-[100%] rounded-lg opacity-[0.6] hover:opacity-[1]"
                alt=""
              />
              <p className="absolute hidden md:inline-block bottom-5 text-white">
                اختصاصی <span className="text-yellow-400">فیلیمو</span>
              </p>
            </div>
          )}
          {oskar ? (
            <div
              className="w-[30%]  relative mx-3 lg:mx-0 rounded-lg flex justify-center border-2"
              onClick={() => changOS()}
            >
              <img
                src={Img5}
                className="w-[100%] rounded-lg opacity-[0.6] hover:opacity-[1]"
                alt=""
              />
              <p className="absolute hidden md:inline-block bottom-5 text-white">
                اختصاصی <span className="text-yellow-400">فیلیمو</span>
              </p>
            </div>
          ) : (
            <div
              className="w-[30%]  relative mx-3 lg:mx-0 rounded-lg flex justify-center"
              onClick={() => changOS()}
            >
              <img
                src={Img6}
                className="w-[100%] rounded-lg opacity-[0.6] hover:opacity-[1]"
                alt=""
              />
              <p className="absolute hidden md:inline-block bottom-5 text-white">
                اختصاصی <span className="text-yellow-400">فیلیمو</span>
              </p>
            </div>
          )}
        </div>
        <div className="w-[100%] flex justify-around">
          {sepanj ? (
            <div
              className="w-[30%]  relative mx-3 lg:mx-0 rounded-lg flex justify-center border-2"
              onClick={() => changSP()}
            >
              <img
                src={Img7}
                className="w-[100%] rounded-lg opacity-[0.6] hover:opacity-[1]"
                alt=""
              />
              <p className="absolute hidden md:inline-block bottom-5 text-white">
                اختصاصی <span className="text-yellow-400">فیلیمو</span>
              </p>
            </div>
          ) : (
            <div
              className="w-[30%]  relative mx-3 lg:mx-0 rounded-lg flex justify-center"
              onClick={() => changSP()}
            >
              <img
                src={Img8}
                className="w-[100%] rounded-lg opacity-[0.6] hover:opacity-[1]"
                alt=""
              />
              <p className="absolute hidden md:inline-block bottom-5 text-white">
                اختصاصی <span className="text-yellow-400">فیلیمو</span>
              </p>
            </div>
          )}
          {zodiak ? (
            <div
              className="w-[30%]  relative mx-3 lg:mx-0 rounded-lg flex justify-center border-2"
              onClick={() => changZD()}
            >
              <img
                src={Img9}
                className="w-[100%] rounded-lg opacity-[0.6] hover:opacity-[1]"
                alt=""
              />
              <p className="absolute hidden md:inline-block bottom-5 text-white">
                اختصاصی <span className="text-yellow-400">فیلیمو</span>
              </p>
            </div>
          ) : (
            <div
              className="w-[30%]  relative mx-3 lg:mx-0 rounded-lg flex justify-center"
              onClick={() => changZD()}
            >
              <img
                src={Img10}
                className="w-[100%] rounded-lg opacity-[0.6] hover:opacity-[1]"
                alt=""
              />
              <p className="absolute hidden md:inline-block bottom-5 text-white">
                اختصاصی <span className="text-yellow-400">فیلیمو</span>
              </p>
            </div>
          )}
          {dolfin ? (
            <div
              className="w-[30%]  relative mx-3 lg:mx-0 rounded-lg flex justify-center border-2"
              onClick={() => changDL()}
            >
              <img
                src={Img11}
                className="w-[100%] rounded-lg opacity-[0.6] hover:opacity-[1]"
                alt=""
              />
              <p className="absolute hidden md:inline-block bottom-5 text-white">
                اختصاصی <span className="text-yellow-400">فیلیمو</span>
              </p>
            </div>
          ) : (
            <div
              className="w-[30%]  relative mx-3 lg:mx-0 rounded-lg flex justify-center"
              onClick={() => changDL()}
            >
              <img
                src={Img12}
                className="w-[100%] rounded-lg opacity-[0.6] hover:opacity-[1]"
                alt=""
              />
              <p className="absolute hidden md:inline-block bottom-5 text-white">
                اختصاصی <span className="text-yellow-400">فیلیمو</span>
              </p>
            </div>
          )}
        </div>
      </div>
      {ghotb ? <Ghotb sc={imageref} /> : <></>}
      {sedato ? <Sedato sc={imageref} /> : <></>}
      {oskar ? <Oskar sc={imageref} /> : <></>}
      {sepanj ? <Sepanj sc={imageref} /> : <></>}
      {zodiak ? <Zodiak sc={imageref} /> : <></>}
      {dolfin ? <Dolfini sc={imageref} /> : <></>}
    </>
  );
}

export default Serials;
