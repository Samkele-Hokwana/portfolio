import { Link } from "react-router-dom";
import "./AboutContentStyles.css";

import React1 from "../assets/reacto.webp";
import React2 from "../assets/reacteo.png" 


import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who am I?</h1>
            <p>I am software developer, this has been my passion ever since I was in high school. I always thought programming is magic. I guess I'm a magician now.</p>
            <Link to="/contact">
                <button className="btn">CONTACT</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={React1}  className="img" alt="top is here"/>
                </div>
            </div>
            <div className="img-container">
                <div className="img-stack bottom">
                    <img src={React2}  className="img" alt="top is here"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent