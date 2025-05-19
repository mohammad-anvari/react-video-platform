import React from 'react'
import Home from '../Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Information from '../Information/Information'
import Subscription from '../Subscription/Subscription'
import Aho from '../Buytickets/Aho'
import Havaei from '../Buytickets/Havaei'
import Negahbaneshab from '../Buytickets/Negahbaneshab'
import Gijgah from '../Buytickets/Gijgah'

function App() {
  return (
<div className='fs'>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/information' element={<Information/>}/>
    <Route path='/subscription' element={<Subscription/>}/>
    <Route path='/Aho' element={<Aho/>}/>
    <Route path='/havaei' element={<Havaei/>}/>
    <Route path='/Negahbaneshab' element={<Negahbaneshab/>}/>
    <Route path='/Gijgah' element={<Gijgah/>}/>
  </Routes>
  </BrowserRouter>
</div>
  )
}

export default App