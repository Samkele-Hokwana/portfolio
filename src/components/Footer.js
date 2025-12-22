import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTiktok } from 'react-icons/fa'
import './FooterStyles.css'

import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                    <div>
                        <p>01 Gomery Avenue,</p>
                        <p>Omega Lodge,</p>
                        <p>Summerstrand</p>
                    </div>
                </div>
                <div className="phone">
                    <h4>
                        <FaPhone size={20} style={{color: "#fff", marginRight: "2rem"}}/>071 3407 369
                    </h4>
                </div>
                <div className="email">
                    <h4>
                        <FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}}/> samkelehokwana@gmail.com
                    </h4>
                </div>
            </div>
            <div className="right">
                <h4>About the developer</h4>
                <p>This is me Samkele Oyintanda Hokwana. Tech and Math enthusiast. I enjoy new projects and discussing challenges</p>
                <div className="social">
                    <FaFacebook size={30} style={{color: "#fff", marginRight: "1rem"}}/>
                    <FaTiktok size={30} style={{color: "#fff", marginRight: "1rem"}}/>
                    <FaLinkedin size={30} style={{color: "#fff", marginRight: "1rem"}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer