import { Link } from "react-router-dom"
import "./NavbarStyles.css"
import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa"

const Navbar = () => {
    const [click,setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color,setColor] = useState(false);
    const changecolor = () => {
        if(window.ScreenY >= 100){
            setColor(true);
        }else{
            setColor(false);
        }
    };
    window.addEventListener("scroll", setColor);

  return (
    <div className={color ? "header header-bg": "header"}>
        <Link className="btn" to={"/"}>
            <h1>Sam's Portfolio</h1> 
        </Link>
        <ul className={click ? "Nav-menu active" : "Nav-menu"}>
                <li>
                    <Link className="btn" to={"/"}>Home</Link>
                </li>
                <li>
                    <Link className="btn" to={"/projects"}>Projects</Link>
                </li>
                <li>
                    <Link className="btn" to={"/contact"}>Contact</Link>
                </li>
                <li>
                    <Link className="btn" to={"/about"}>About</Link>
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