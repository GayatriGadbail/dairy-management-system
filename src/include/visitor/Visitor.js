import React from 'react'
import Header from '../../templates/header/Header'
import { Route, Routes } from 'react-router-dom'
import Home from '../../templates/home/Home'
import About from '../../templates/about/About'
import ContactUs from '../../templates/contactus/ContactUs'
import Review from '../review/Review'
import SignIn from '../signIn/SignIn'
import Search from '../search/Search'

function Visitor() {
  return (
    <div>
    <Header/>
    
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
       
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<ContactUs/>} />
        <Route path='/review' element={<Review/>} />
        <Route path='/signIn' element={<SignIn/>} />
        <Route path='/search' element={<Search />} />
      
      </Routes>
   
    </div>
  )
}

export default Visitor