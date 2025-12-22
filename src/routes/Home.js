import React from 'react'
import Navbar from '../components/Navbar'
import HeroImg from '../components/HeroImg'
import Footer from '../components/Footer'
import Skills from '../components/Skills'

function Home() {
  return (
    <div>
      <Navbar/>
      <HeroImg/>
      <Skills/>
      <Footer/>
    </div>
  )
}

export default Home