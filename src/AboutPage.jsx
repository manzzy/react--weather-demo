import React from 'react'
import About from './components/AboutComponent/About'
import Footer from './components/Footer/Footer'
import Nav from './components/Nav/Nav'

const AboutPage = () => {
  return (
    <div className='App'>
        <Nav />
        <About />
        <Footer />
    </div>
  )
}

export default AboutPage