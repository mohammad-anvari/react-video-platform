import React from 'react'
import Header from '../Header/Header'
import Sliders from '../Sliders/Sliders'
import SerialSlider from '../Sliders/SerialSlider'
import About1 from '../About/About1md'
import About2 from '../About/About2'
import FreeMovie from '../Free/FreeMovie'
import About3 from '../About/About3'
import CinemaOnline from '../Cinema/CinemaOnline'
import Coment from '../Comments/Coment'
import Footer from '../Footer/Footer'
import Accordion from '../Accordion/Accordion'

function Home() {
  return (
    <>
    <div className='w-[100%] h-[100%] fs'>
<Header/>
<Sliders/>
<SerialSlider/>
<About1/>
<About2/>
<FreeMovie/>
<About3/>
<CinemaOnline/>
<Coment/>
<Accordion/>
<Footer/>
</div>
    </>
  )
}

export default Home