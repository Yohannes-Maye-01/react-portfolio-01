import React from 'react'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import About from './components/about/About'
import Experience from './components/experiance/Experiance'
import Services from './components/Services/Services'
import Portfolio from './components/Portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/Footer/Footer'


function App() {


  return (
    <>
    <Header />
    <Nav/>
    <About/>
    <Experience/>
    <Services/>
    <Portfolio/>
    {/* <Testimonials/> */}
    <Contact/>
    <Footer/>

    </>
  )
}

export default App
