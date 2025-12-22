import './HeroImgStyles.css';
import IntroImg from '../assets/Intro-bg.jpg'
import React from 'react'
import { Link } from 'react-router-dom';


const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="Introbg"/>
      </div>
      <div className="content">
        <p>Hi, I'm a recent BSc:Computer Science and Mathematics graduate from Nelson Mandela University</p>
        <h1>I'm a C# and Java developer</h1>
        <Link to="/projects" className="btn">Projects</Link>
        <Link to="/contact" className="btn btn-light">Contact</Link>
      </div>
    </div>
  )
}

export default HeroImg