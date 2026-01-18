import { Link } from "react-router-dom"
import "./NavbarStyles.css"
import profilePic from "../assets/profile-picture.png"
import React, { useEffect, useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa"

const Navbar = () => {
    const [click,setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color,setColor] = useState(false);
    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 100) {
                setColor(true);
            } else {
                setColor(false);
            }
        };
        
        window.addEventListener("scroll", changeColor);
        
        return () => {
            window.removeEventListener("scroll", changeColor);
        };
    }, []);
    
  return (
    <div className={color ? "header header-bg": "header"}>
        <Link to={"/"}>
            <div className="profile-pic-container">
                <img 
                    src={profilePic} 
                    alt="Profile" 
                    className="profile-pic"
                />
            </div>   
        </Link>
        <ul className={click ? "Nav-menu active" : "Nav-menu"}>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/projects"}>Projects</Link>
                </li>
                <li>
                    <Link to={"/contact"}>Contact</Link>
                </li>
                <li>
                    <Link to={"/about"}>About</Link>
                </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
            { click?
            (<FaTimes size={20} style={{color: "#fff"}}/>)
            :
            (<FaBars size={20} style={{color: "#fff"}}/>)
            }    
        </div>
    </div>
  )
}

export default Navbar