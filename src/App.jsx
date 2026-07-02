import React from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './component/Navbar'
import SwiperSection from './component/Swiper'
import Landingpage2 from './component/Landingpage2'
import Landingpage3 from './component/Landingpage3'
import Landingpage1 from './component/Landingpage1'
import Black from './component/Black'
import Narbarser from './pages/Navbarser'
import Aboutbar from './pages/Aboutbar'
import Vision from './pages/Vision'
import Contact from './pages/Contact'
import Client from './pages/client'
import Create from './pages/Create'
import Book from './pages/Book'
import SelectedItems from './pages/SelectedItems '





const Home = () => {
  return (
    <>
      <SwiperSection />
      <Landingpage2 />
      <Landingpage3 />
      <Landingpage1 />
      <Black />
    </>
  )
}

const App = () => {
  return (

    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/services" element={<Narbarser/>} />
           <Route path="/about" element={<Aboutbar/>} />
           <Route path="/vision" element={<Vision/>} />
           <Route path="/contact" element={<Contact/>} />
            <Route path="/login" element={<Client/>} />
               <Route path="/create" element={<Create/>} />
               <Route path="/book" element={<Book/>} />
               
         
      </Routes>

    </BrowserRouter>
  )
}

export default App